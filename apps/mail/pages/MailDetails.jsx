import {mailService} from '../services/mail.service.js';
import {Loader} from '../../../cmps/Loader.jsx';

export class MailDetails extends React.Component {
  state = {
    mail: null,
  };

  componentDidMount() {
    const id = this.props.match.params.mailId;
    mailService.getEmailById(id).then(mail => {
      if (!mail) this.props.history.push('/mail');
      this.setState({mail});
      if (!mail.isRead) mailService.toggleRead(mail.id);
    });
  }

  onBack = () => {
    this.props.history.push('/mail');
  };

  onDeleteMail = () => {
    mailService.deleteMailById(this.state.mail.id).then(this.onBack);
  };

  render() {
    const {mail} = this.state;
    if (!mail) return <Loader />;
    const {from, to, subject, body} = this.state.mail;
    return (
      <section className="mail-details main-layout">
        <div className="mail-details-actions flex">
          <div className="action-back-container flex" onClick={this.onBack}>
            <i className="action-back-arrow fas fa-arrow-left"></i>
            <p className="action-back-content">Go Back</p>
          </div>
        </div>
        <div className="mail-details-content">
          <div className="content-header">
            <div className="header-left">
              <h1>Sent from: {from}</h1>
              <h3>Sent to: {to}</h3>
              <h4>Subject: {subject}</h4>
            </div>
            <div className="header-right">{/* <p>{utilService.getFormattedDate(1637774407228)}</p> */}</div>
          </div>
          <div className="content-body">
            <p>{body}</p>
            <i onClick={this.onDeleteMail} className="mail-details-delete fas fa-trash"></i>
          </div>
        </div>
      </section>
    );
  }
}
