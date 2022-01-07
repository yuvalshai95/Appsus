export class SearchNote extends React.Component{

    state = {
        value: '',
    }


    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value }),
            () => this.props.onSetFilter(this.state.value)); 
        
    }

    cleanForm = () => {
        this.setState({value:''})
    }

    render() {
        
        const { value } = this.state;
        
        return (
            <div className="search-container">
                    <img src="./././assets/img/search.svg" />
                    <input
                        placeholder="Search note"
                        type="search"
                        name="value"
                        value={value}
                        onChange={this.handleChange} />
                    
            </div>
        )
    }

}