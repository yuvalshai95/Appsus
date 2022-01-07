
export class NoteEditContent extends React.Component {


    state = {
        txt: this.props.dataProps.note.info.txt

    }


    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value }));            
    }


    onUpdateContent = () => {
        const { note, updateNoteContent } = this.props.dataProps
        updateNoteContent(note.id, note.type, this.state.txt);
        this.props.onToggleEdit(false);
    }


    render() {
        const { note } = this.props.dataProps;
  
        
        return (
            <div className="note-edit-content">
                <input
                    onChange={this.handleChange}
                    onBlur={this.onUpdateContent}
                    name="txt" type="text"
                    value={this.state.txt} />
            </div>
        )
    }

}