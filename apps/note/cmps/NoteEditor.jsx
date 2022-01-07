import {ColorPicker} from './ColorPicker.jsx';

export class NoteEditor extends React.Component {
  state = {
    isColorPickerOpen: false,
  };

  onRemoveNote = () => {
    this.props.removeNote(this.props.note.id);
    // TODO: busService user-msg
  };

  onDuplicateNote = () => {
    const {duplicateNote, note} = this.props;
    duplicateNote(note.id);
  };

  onToggleColorPicker = isOpen => {
    this.setState({isColorPickerOpen: isOpen});
  };

    
    onRemoveNote = () => {
        this.props.removeNote(this.props.note.id);
        this.props.toggleModal();
        // TODO: busService user-msg
    }
    
    onDuplicateNote = () => {
        const { duplicateNote, note } = this.props;
        duplicateNote(note.id);
    }
    
    onToggleColorPicker = (isOpen) => {
        this.setState({isColorPickerOpen: isOpen})
    }
    
    render() {
        const { note, changeBgColor} = this.props;
        const { isColorPickerOpen } = this.state;
        
        return(
            <section className="note-editor">
                <i onClick={this.onDuplicateNote} className="fas fa-paste"></i>
                <i onClick={() => this.onToggleColorPicker(true)} className="fas fa-palette"></i>
                {(isColorPickerOpen)
                    && <ColorPicker
                        changeBgColor={changeBgColor}
                        onToggleColorPicker={this.onToggleColorPicker}
                        id={note.id} />}
                <i onClick={this.onRemoveNote} className="far fa-trash-alt"></i>
            </section>
        )
    }
  render() {
    const {note, changeBgColor} = this.props;
    const {isColorPickerOpen} = this.state;

    return (
      <section className="note-editor">
        <i onClick={this.onDuplicateNote} className="fas fa-paste"></i>
        <i onClick={() => this.onToggleColorPicker(true)} className="fas fa-palette"></i>
        {isColorPickerOpen && (
          <ColorPicker
            changeBgColor={changeBgColor}
            onToggleColorPicker={this.onToggleColorPicker}
            id={note.id}
          />
        )}
        <i onClick={this.onRemoveNote} className="far fa-trash-alt"></i>
      </section>
    );
  }
}
