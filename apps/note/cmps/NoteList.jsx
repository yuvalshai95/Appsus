
import { NotePreview } from "./NotePreview.jsx"

                    
export function NoteList({ notes,updateTodoContent,toggleModal, duplicateNote,removeNote,addTodo,toggleDoneTodo,removeTodo, changeBgColor, updateNoteContent, onTogglePinedNote }) {
   
    
    if (!notes.length) return <h4 className="note-list-msg">There are no notes to show</h4>
    return (
        <section className="note-list">
            {notes.map(note =>
                <NotePreview
                toggleModal={toggleModal}
                duplicateNote={duplicateNote}
                updateTodoContent={updateTodoContent}
                removeTodo={removeTodo}
                addTodo={addTodo}
                toggleDoneTodo={toggleDoneTodo}
                onTogglePinedNote={onTogglePinedNote}
                updateNoteContent = {updateNoteContent}
                changeBgColor={changeBgColor}
                removeNote={removeNote}
                key={note.id}
                note={note} />)}
        </section>
    )
}