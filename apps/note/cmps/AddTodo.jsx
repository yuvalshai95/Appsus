export class AddTodo extends React.Component {

    
    state = {
        title:'',
        todos: [{ txt: '' }],
        isAddInput: false,
        inputs = [],
    }


    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value }));            
    }

    addNewInput = () => {
        this.setState({ isAddInput: true });
        setTimeout(() => {
            this.setState({isAddInput:false})
        },2200)
    }


    render() {
        const { title, todos,inputs } = this.state;
        
        if (this.state.isAddInput) inputs.push('a');
        
        if (!inputs.length) inputs = <span></span>
        else inputs = inputs.map(item =>  <input
            type="text"
            name="title"
            value={title}
            placeholder='Enter note title here...'
            onChange={this.handleChange}
            onBlur={this.onAddNote} />)
        
        return (
            <div className="add-input">
                        <form onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                name="title"
                                value={title}
                                placeholder='Enter note title here...'
                                onChange={this.handleChange}
                        onBlur={this.onAddNote} />
                        <hr />
                            <input
                                type="text"
                                name="title"
                                value={title}
                                placeholder='Enter note title here...'
                                onChange={this.handleChange}
                                onBlur={this.onAddNote} />
                    <i onClick={this.addNewInput} className="fas fa-plus"></i>
                    <hr />
                    {inputs}
                        </form>
                    </div>

        )
        
    }
}