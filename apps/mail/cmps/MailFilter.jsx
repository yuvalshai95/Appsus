export class MailFilter extends React.Component {
  state = {
    txt: '',
  };

  handleChange = ({target}) => {
    const txt = target.value;

    this.setState({txt}, () => {
      let newCriteria = this.props.criteria;
      newCriteria.txt = this.state.txt;
      this.props.onSetCriteria(newCriteria);
    });
  };

  render() {
    const {txt} = this.state;
    return (
      <div className="mail-filter-search flex">
        <img src="./././assets/img/search.svg" />
        <form>
          <input
            type="text"
            name="search"
            value={txt}
            placeholder="Search emails"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
