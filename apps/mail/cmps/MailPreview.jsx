import {utilService} from '../../../services/util.service.js';

import {mailService} from '../services/mail.service.js';
import {MailLongText} from './MailLongText.jsx';

const {Link} = ReactRouterDOM;

export class MailPreview extends React.Component {
  state = {
    mail: this.props.mail,
    isRead: this.props.mail.isRead,
    isStarred: this.props.mail.isStarred,
  };

  onToggleStar = ev => {
    ev.preventDefault();
    mailService.toggleStar(this.props.mail.id).then(() => {
      // TODO: to check if need to reload all emails
      //   this.props.loadMails();
    });
    this.setState({isStarred: !this.state.isStarred});
  };

  onToggleRead = ev => {
    ev.preventDefault();
    mailService.toggleRead(this.props.mail.id).then(() => {
      this.setState({isRead: !this.state.isRead});
    });
  };

  onDeleteMail = ev => {
    ev.preventDefault();
    mailService.deleteMailById(this.props.mail.id).then(() => {
      this.props.loadMails();
    });
  };

  render() {
    const {mail} = this.props;
    const {isRead, isStarred} = this.state;
    const isReadIcon = isRead ? (
      <i onClick={this.onToggleRead} className="far fa-envelope-open"></i>
    ) : (
      <i onClick={this.onToggleRead} className="far fa-envelope"></i>
    );
    return (
      <Link to={`mail/${mail.id}`}>
        <section className={`mail-preview ${isRead ? 'read' : 'unread'}`}>
          <i
            onClick={this.onToggleStar}
            className={`${isStarred ? 'active-star' : ''} mail-preview-star fas fa-star`}></i>
          <h3 className="mail-preview-from">{mail.from}</h3>

          <div className="mail-preview-subject-container">
            <p className="mail-preview-subject">{mail.subject}</p>
          </div>

          <div className="mail-preview-body-container">
            <MailLongText txt={mail.body} />
          </div>

          <div className="mail-preview-actions">
            <div className="actions-btns flex">
              <div className="btns-hover">
                {isReadIcon}

                <i onClick={this.onDeleteMail} className="mail-preview-delete fas fa-trash"></i>
              </div>

              <p className="actions-time">{utilService.getFormattedDate(mail.sentAt)}</p>
            </div>
          </div>
        </section>
      </Link>
    );
  }
}
