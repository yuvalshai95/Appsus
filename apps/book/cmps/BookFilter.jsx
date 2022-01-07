export class BookFilter extends React.Component {
  state = {
    filterBy: {
      name: '',
      minPrice: '',
      maxPrice: '',
    },
  };

  handleChange = ({target}) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState(
      prevState => ({
        filterBy: {...prevState.filterBy, [field]: value},
      }),
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  onSubmitFilter = evt => {
    evt.preventDefault();
    this.props.onSetFilter(this.state.filterBy);
    this.cleanForm();
  };

  cleanForm = () => {
    this.setState({filterBy: {name: '', minPrice: '', maxPrice: ''}});
  };

  render() {
    const {
      filterBy: {name, minPrice, maxPrice},
    } = this.state;
    return (
      <form className="book-filter" onSubmit={this.onSubmitFilter}>
        <div className="filter-title">Search: </div>
        <input type="text" name="name" value={name} placeholder="Book Name" onChange={this.handleChange} />

        <input
          type="number"
          name="minPrice"
          value={minPrice}
          placeholder="Minimum Price"
          onChange={this.handleChange}
        />

        <input
          type="number"
          name="maxPrice"
          value={maxPrice}
          placeholder="Max Price"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
