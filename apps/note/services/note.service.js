import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { func } from 'prop-types';


export const noteService = {
    query,
    createNote,
    removeNote,
    changeNoteBgColor,
    updateNoteContent,
    togglePinnedNote,
    toggleDone,
    addTodo,
    removeTodo,
    updateTodoContent,
    duplicateNote

}

const STORAGE_KEY = 'notesDB';

createNotes()

function toggleDone(todoId, noteId) {
    let notes = _loadNotesFromStorage();
    let noteIdx = notes.findIndex(note => note.id === noteId);
    let todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId);
    let isDoneStatus = notes[noteIdx].info.todos[todoIdx].isDone
    notes[noteIdx].info.todos[todoIdx].isDone = !isDoneStatus;
    _saveNotesToStorage(notes)
    return Promise.resolve();

}

function query(filterChar) {

    let notes = _loadNotesFromStorage();
    if (filterChar) {
        notes = notes.filter(note => {
            switch (note.type) {
                case 'note-txt':
                    return note.info.txt.toLowerCase().includes(filterChar.toLowerCase())
                case 'note-todos':
                    return note.info.title.toLowerCase().includes(filterChar.toLowerCase())
            }
        })
    }


    const pinnedNotes = notes.filter(note => note.isPinned);
    const unPinnedNotes = notes.filter(note => !note.isPinned);
    // if (!filterBy) return Promise.resolve(cars)
    // const filteredCars = _getFilteredCars(cars, filterBy)
    return Promise.resolve({ pinnedNotes, unPinnedNotes })
}

function updateTodoContent(todoId, noteId, value) {
    let notes = _loadNotesFromStorage();
    let noteIdx = notes.findIndex(note => note.id === noteId);
    const todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId);
    notes[noteIdx].info.todos[todoIdx].txt = value;
    _saveNotesToStorage(notes);
    return Promise.resolve();
}

function duplicateNote(noteId) {
    let notes = _loadNotesFromStorage();
    const noteIdx = notes.findIndex(note => note.id === noteId);
    const duplicateNote = { ...notes[noteIdx], id: utilService.makeId() };
    notes.unshift(duplicateNote);
    _saveNotesToStorage(notes);
    return Promise.resolve();
}

function removeTodo(todoId, noteId) {
    let notes = _loadNotesFromStorage();
    let noteIdx = notes.findIndex(note => note.id === noteId);

    notes[noteIdx].info.todos = notes[noteIdx].info.todos.filter(todo => todo.id !== todoId);
    _saveNotesToStorage(notes);
    return Promise.resolve();
}


function addTodo(value, noteId) {
    let notes = _loadNotesFromStorage();
    let noteIdx = notes.findIndex(note => note.id === noteId);
    notes[noteIdx].info.todos.unshift(_createTodo(value));
    _saveNotesToStorage(notes);
    return Promise.resolve();
}

function _createTodo(txt) {
    return {
        id: utilService.makeId(),
        txt,
        isDone: false,
    }
}


function removeNote(noteId) {
    let notes = _loadNotesFromStorage();

    notes = notes.filter(note => note.id !== noteId);
    _saveNotesToStorage(notes);
    return Promise.resolve();

}


function togglePinnedNote(noteId, isPinned) {
    const notes = _loadNotesFromStorage();
    const noteIdx = notes.findIndex(note => note.id === noteId);
    notes[noteIdx].isPinned = isPinned;
    _saveNotesToStorage(notes);
    return Promise.resolve();
}

function changeNoteBgColor(color, noteId) {
    const notes = _loadNotesFromStorage();
    let noteIdx = notes.findIndex(note => note.id === noteId);
    notes[noteIdx].style.backgroundColor = color;
    _saveNotesToStorage(notes);
    return Promise.resolve()
}

function createNote(value, type) {
    let notes = _loadNotesFromStorage()
    const infoKey = getInfoKeyByType(type);


    let note = {
        id: utilService.makeId(),
        type,
        isPinned: true,
        info: {
            [infoKey]: (infoKey === 'urlId') ? utilService.getYoutubeId(value) : value,
        },
        style: {
            backgroundColor: utilService.getRandomColor(),
        }

    }
    if (type === 'note-todos') note.info.todos = [];
    notes.unshift(note);
    _saveNotesToStorage(notes);
    return Promise.resolve()

}



function updateNoteContent(noteId, noteType, value) {
    const notes = _loadNotesFromStorage()
    const noteIdx = notes.findIndex(note => note.id === noteId);
    switch (noteType) {
        case 'note-txt':
            notes[noteIdx].info.txt = value;
    }

    _saveNotesToStorage(notes);
    return Promise.resolve(notes[noteIdx])
}

function getInfoKeyByType(type) {
    switch (type) {
        case 'note-img':
            return 'url'
        case 'note-txt':
            return 'txt'
        case 'note-todos':
            return 'title'
        case 'note-video':
            return 'urlId'
    }
}

function createNotes() {
    let notes = _loadNotesFromStorage();
    if (!notes || !notes.length) {

        notes = [
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: "#fbbc04"
                }

            },
            {
                id: utilService.makeId(),
                type: "note-img",
                isPinned: true,
                info: {
                    url: "https://www.coding-academy.org/images/ca-logo-dark@2x.png",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#d7aefb"
                }

            },

            {
                id: utilService.makeId(),
                type: "note-todos",
                isPinned: true,
                info: {
                    title: "01/01/22 - tasks:",
                    todos: [
                        { id: utilService.makeId(), txt: "Driving liscence", isDone: true },
                        { id: utilService.makeId(), txt: "Coding power", isDone: false },
                        { id: utilService.makeId(), txt: "sleep", isDone: false },
                        { id: utilService.makeId(), txt: "eat", isDone: false },
                    ]
                },
                style: {
                    backgroundColor: "#ccff90"
                }

            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "08:30-10:00 - CODE REVIEW"
                },
                style: {
                    backgroundColor: "#fbbc04"
                }

            },
            {
                id: utilService.makeId(),
                type: "note-img",
                isPinned: true,
                info: {
                    url: "https://media4.giphy.com/media/qvtLuBQ7WVD0ZurSUz/giphy.gif?cid=ecf05e47aafc678dc980417742da1ee5d970c0c9efbe3ca7&rid=giphy.gif&ct=g"
                },
                style: {
                    backgroundColor: "#f28b82"
                }

            },
            {
                id: utilService.makeId(),
                type: "note-img",
                isPinned: true,
                info: {
                    url: "https://www.juventus.com/images/image/private/t_portrait_mobile/dev/t5mex3dyn30xi3ox6ii5.jpg"

                },
                style: {
                    backgroundColor: "#a7ffeb"
                }

            },
            {
                id: utilService.makeId(),
                type: "note-video",
                isPinned: true,
                info: {
                    urlId: "LnCkiHgK1EM"
                },
                style: {
                    backgroundColor: "#d7aefb"
                }

            },

            {
                id: utilService.makeId(),
                type: "note-todos",
                isPinned: true,
                info: {
                    title: "05/01/22 - tasks:",
                    todos: [
                        { id: utilService.makeId(), txt: "node.js practice", isDone: true },
                        { id: utilService.makeId(), txt: "CR - afternoon", isDone: false },
                        { id: utilService.makeId(), txt: "running", isDone: false },
                        { id: utilService.makeId(), txt: "relax!", isDone: false },
                    ]
                },
                style: {
                    backgroundColor: "#fbbc04"
                }

            },
            {
                id: utilService.makeId(),
                type: "note-video",
                isPinned: false,
                info: {
                    urlId: "M-aoyPa41Ic"
                },
                style: {
                    backgroundColor: "#a7ffeb"
                }

            },
        ];

    }
    _saveNotesToStorage(notes)
}




// Locals Functions
function _saveNotesToStorage(data) {
    storageService.saveToStorage(STORAGE_KEY, data)
}


function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}