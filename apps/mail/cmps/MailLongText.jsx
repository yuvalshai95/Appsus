export class MailLongText extends React.Component {
  state = {
    txt: '',
  };
  componentDidMount() {
    this.loadTxt();
  }

  loadTxt = () => {
    this.setState({txt: this.props.txt});
  };

  render() {
    const {txt} = this.state;
    if (!txt) return <div>Loading....</div>;

    return <p className="mail-preview-body">{`${txt.substring(0, 100)}...`}</p>;
  }
}
