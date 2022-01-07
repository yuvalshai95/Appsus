import {AddNote} from '../apps/note/cmps/AddNote.jsx';
import {NoteHeader} from '../apps/note/cmps/NoteHeader.jsx';
import {NoteList} from '../apps/note/cmps/NoteList.jsx';
import {NoteModal} from '../apps/note/cmps/NoteModal.jsx';
import {SearchNote} from '../apps/note/cmps/SearchNote.jsx';
import {noteService} from '../apps/note/services/note.service.js';

export class NoteApp extends React.Component {
  state = {
    pinnedNotes: null,
    unPinnedNotes: null,
    filterChar: null,
    isModal: false,
  };

  componentDidMount() {
    this.loadNotes();
    window.scrollTo(0, 0);
  }

  loadNotes = () => {
    noteService.query(this.state.filterChar).then(({pinnedNotes, unPinnedNotes}) => {
      this.setState({pinnedNotes, unPinnedNotes});
    });
  };

  toggleModal = () => {
    this.setState({isModal: !this.state.isModal});
  };

  updateNoteContent = (noteId, noteType, txt) => {
    noteService.updateNoteContent(noteId, noteType, txt).then(this.loadNotes());
  };

  addNote = (value, type) => {
    noteService.createNote(value, type).then(this.loadNotes());
  };
  duplicateNote = noteId => {
    noteService.duplicateNote(noteId).then(this.loadNotes());
  };

  removeNote = noteId => {
    noteService.removeNote(noteId).then(this.loadNotes());
  };

  updateTodoContent = (todoId, noteId, value) => {
    noteService.updateTodoContent(todoId, noteId, value).then(this.loadNotes());
  };

  toggleDoneTodo = (todoId, noteId) => {
    noteService.toggleDone(todoId, noteId).then(this.loadNotes());
  };

  addTodo = (value, noteId) => {
    noteService.addTodo(value, noteId).then(this.loadNotes());
  };

  removeTodo = (todoId, noteId) => {
    noteService.removeTodo(todoId, noteId).then(this.loadNotes());
  };

  changeBgColor = (color, noteId) => {
    noteService.changeNoteBgColor(color, noteId).then(this.loadNotes());
  };

  onTogglePinedNote = (noteId, isPinned) => {
    noteService.togglePinnedNote(noteId, isPinned).then(this.loadNotes());
  };

  onSetFilter = value => {
    this.setState({filterChar: value}, this.loadNotes);
  };

  render() {
    const {pinnedNotes, unPinnedNotes, isModal} = this.state;

    if (!pinnedNotes || !unPinnedNotes) return <h1>no notes</h1>;
    return (
      <section className="note-app ">
        {/* <NoteHeader onSetFilter={this.onSetFilter}/> */}
        <SearchNote onSetFilter={this.onSetFilter} />
        {/* <SearchNote/> */}
        <div className="main-layout">
          <AddNote addNote={this.addNote} />
          <span className="sub-title">pinned notes:</span>
          <NoteList
            toggleModal={this.toggleModal}
            duplicateNote={this.duplicateNote}
            updateTodoContent={this.updateTodoContent}
            removeTodo={this.removeTodo}
            addTodo={this.addTodo}
            toggleDoneTodo={this.toggleDoneTodo}
            updateNoteContent={this.updateNoteContent}
            onTogglePinedNote={this.onTogglePinedNote}
            removeNote={this.removeNote}
            changeBgColor={this.changeBgColor}
            notes={pinnedNotes}
          />

          <span className="sub-title">other notes:</span>
          <NoteList
            toggleModal={this.toggleModal}
            duplicateNote={this.duplicateNote}
            updateTodoContent={this.updateTodoContent}
            removeTodo={this.removeTodo}
            addTodo={this.addTodo}
            toggleDoneTodo={this.toggleDoneTodo}
            updateNoteContent={this.updateNoteContent}
            onTogglePinedNote={this.onTogglePinedNote}
            removeNote={this.removeNote}
            changeBgColor={this.changeBgColor}
            notes={unPinnedNotes}
          />
        </div>

        {isModal && <NoteModal toggleModal={this.toggleModal} txt={'Note Removed!'} />}
      </section>
    );
  }
}
