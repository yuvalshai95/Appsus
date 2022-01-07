// import { AddTodo } from "./AddTodo.jsx";
export class AddNote extends React.Component {

    state = {
        value: '',
        type: 'note-txt',
        placeholder: 'Enter new note here',        
    }
    
    

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value }));            
    }
   
    onSetType = (type) => {        
        this.setState({ type });
        const placeholder = this.changePlaceholder(type)
        this.setState({placeholder})
    }

    changePlaceholder = (type) => {
        switch (type) {
            case 'note-img':
                return 'Enter image url...'
            case 'note-video':
                return 'Enter video url...'
            case 'note-txt':
                return 'Enter new note here...'
            case 'note-todos':
                return 'Enter Todo title here...'
            }
           
    }

    
    onAddNote = () => {
        const { value, type } = this.state;
        if (!value || !type) return;
        this.props.addNote(value, type);
        this.resetInput();
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.onAddNote();
    }
    
    resetInput = () => {
        this.setState({value: ''})
    }
    
   
    render() {
        const  { value, placeholder, isAddToDo,type } = this.state;
        const buttonsIcons = [
        <i onClick={() => this.onSetType('note-txt')} className={`far fa-sticky-note ${(type === 'note-txt') ? 'active' : ''}`}></i>,
        <i onClick={() => this.onSetType('note-video')} className={`fab fa-youtube ${(type==='note-video') ? 'active' : ''} `}></i>,
        <i onClick={() => this.onSetType('note-img')} className={`far fa-images ${(type === 'note-img' ) ? 'active' : ''}`}></i>,
        <i onClick={() => this.onSetType('note-todos')} className={`far fa-list-alt ${(type === 'note-todos') ? 'active' : ''}`}></i>]
        const buttons = buttonsIcons.map((icon, idx) => <button
            className="button-type" key={idx} >{icon}</button>)
        
        return (
            <section className="add-note">
                {/* {(!isAddToDo) && */}
                    <div className="add-input">
                        <form onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                name="value"
                                value={value}
                                placeholder={placeholder}
                                onChange={this.handleChange}
                            onBlur={this.onAddNote} />
                        <div className="buttons">
                            {buttons}
                        </div>
                        </form>
                    </div>
                
                {/* {(isAddToDo) && <AddTodo/>} */}
            </section>
            
        )
    }


}