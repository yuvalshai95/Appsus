
import { NoteEditor } from "./NoteEditor.jsx";
import { NoteImg } from "./NoteImg.jsx";
import { NoteTodos } from "./NoteTodos.jsx";
import { NoteTxt } from "./NoteTxt.jsx";
import { NoteVideo } from "./NoteVideo.jsx";



export function NotePreview({ note,updateTodoContent, toggleModal, duplicateNote,addTodo,removeTodo,  removeNote, changeBgColor,toggleDoneTodo, updateNoteContent, onTogglePinedNote }) {

    const dataProps = {
        duplicateNote,
        removeNote,
        changeBgColor,
        updateNoteContent,
        toggleDoneTodo,
        addTodo,
        removeTodo,
        toggleModal,
        updateTodoContent,
        note
    }

    function getCmpByType(type) {
        switch (type) {
            case 'note-txt':
                return <NoteTxt dataProps={{ ...dataProps }}  />
            case 'note-todos':
                return <NoteTodos dataProps={{ ...dataProps }}/>
            case 'note-img':
                return <NoteImg dataProps={{ ...dataProps }}  />
            case 'note-video':
                return <NoteVideo dataProps={{...dataProps}} />
        }
    }

    function onTogglePin() {
        const notePinStatus = note.isPinned;
        onTogglePinedNote(note.id,!notePinStatus);
    }

    // function onRemoveNote() {
    //     removeNote(note.id);
    // }
    const { backgroundColor } = note.style;
    return (
        <section style={{ backgroundColor }} className="note-preview">
            <i onClick={onTogglePin}  className="fas fa-thumbtack"></i>
            {getCmpByType(note.type)}
            <NoteEditor
                toggleModal={toggleModal}
                duplicateNote={duplicateNote}
                removeNote={removeNote}
                changeBgColor={changeBgColor}
                note={note} /> 
        </section>
    )
}

