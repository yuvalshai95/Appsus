import {mailService} from '../../mail/services/mail.service.js';

export class MailCompose extends React.Component {
  state = {
    email: {
      to: '',
      from: 'yuval@Appsus.com',
      subject: '',
      body: '',
    },
  };

  refInput = React.createRef();

  componentDidMount() {
    this.refInput.current.focus();
  }

  handleChange = ({target}) => {
    const field = target.name;
    const value = target.value;

    this.setState(prevState => ({
      email: {...prevState.email, [field]: value},
    }));
  };

  onSendEmail = ev => {
    ev.preventDefault();

    mailService.send(this.state.email).then(() => {
      this.props.onClose();
      this.props.toggleModal();
    });
  };

  render() {
    const {to, subject, body} = this.state;
    return (
      <section className="mail-compose">
        <div className="compose-header flex justify-space-between">
          <h4>New Message</h4>
          <button onClick={this.props.onClose}>X</button>
        </div>
        <form className="compose-form" onSubmit={this.onSendEmail}>
          <input
            type="email"
            value={to}
            placeholder="To"
            ref={this.refInput}
            name="to"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            value={subject}
            placeholder="Subject"
            name="subject"
            onChange={this.handleChange}
          />
          <textarea
            value={body}
            onChange={this.handleChange}
            placeholder="Message..."
            name="body"
            cols="90"
            rows="14"></textarea>
          <div className="form-submit-btn">
            <button type="submit">Send</button>
          </div>
        </form>
      </section>
    );
  }
}
