import {mailService} from '../apps/mail/services/mail.service.js';
import {Loader} from '../cmps/Loader.jsx';

import {MailList} from '../apps/mail/cmps/MailList.jsx';
import {MailCompose} from '../apps/mail/cmps/MailCompose.jsx';
import {MailModal} from '../apps/mail/cmps/MailModal.jsx';
import {MailSideNav} from '../apps/mail/cmps/MailSideNav.jsx';
import {Screen} from '../apps/mail/cmps/Screen.jsx';

export class MailApp extends React.Component {
  state = {
    mails: null,
    criteria: {
      status: 'inbox',
      txt: '',
      isStarred: false,
      isRead: false,
    },
    isCompose: false,
    isModal: false,
    isNavToggled: false,
  };

  componentDidMount() {
    this.loadMails();
    window.scrollTo(0, 0);
  }

  loadMails = () => {
    const {criteria} = this.state;

    mailService.query(criteria).then(mails => {
      this.setState({mails});
    });
  };

  onSetCriteria = newCriteria => {
    this.setState({criteria: newCriteria}, this.loadMails);
  };

  toggleModal = () => {
    this.setState({isModal: !this.state.isModal});
  };

  toggleNav = () => {
    this.setState({isNavToggled: !this.state.isNavToggled});
  };

  onClose = () => {
    this.setState({isCompose: false});
  };

  onOpenCompose = () => {
    this.setState({isCompose: true});
  };

  render() {
    const {mails} = this.state;
    if (!mails) return <Loader />;
    return (
      <section className="mail-app">
        <Screen isNavToggled={this.state.isNavToggled} toggleNav={this.toggleNav} />
        <div className="mail-main">
          <MailSideNav
            onOpenCompose={this.onOpenCompose}
            criteria={this.state.criteria}
            onSetCriteria={this.onSetCriteria}
            loadMails={this.loadMails}
            isNavToggled={this.state.isNavToggled}
            toggleNav={this.toggleNav}
          />

          <MailList
            mails={mails}
            loadMails={this.loadMails}
            toggleModal={this.toggleModal}
            criteria={this.state.criteria}
            onSetCriteria={this.onSetCriteria}
            toggleNav={this.toggleNav}
          />
          {this.state.isCompose && <MailCompose onClose={this.onClose} toggleModal={this.toggleModal} />}
          {this.state.isModal && <MailModal txt="Message sent successfully" toggleModal={this.toggleModal} />}
        </div>
      </section>
    );
  }
}
