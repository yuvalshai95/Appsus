import {MailFilter} from './MailFilter.jsx';
import {MailPreview} from './MailPreview.jsx';

export function MailList({mails, loadMails, onSetCriteria, criteria, toggleNav}) {
  if (!mails) return <h1 className="main-layout">There are no emails to show</h1>;
  return (
    <div className="mail-list-container main-layout">
      <div className="mail-filter-search-container flex">
        <i onClick={toggleNav} className="mail-hamburger fas fa-bars"></i>
        <MailFilter criteria={criteria} onSetCriteria={onSetCriteria} />
      </div>
      <div className="mail-list-rows-container">
        <div className="mail-list-header">
          <h3 className="header-folder">{`${criteria.status} Messages`}</h3>
        </div>
        {mails.length === 0 && <h1>There are no emails to show</h1>}
        {mails && mails.map(mail => <MailPreview key={mail.id} mail={mail} loadMails={loadMails} />)}
      </div>
    </div>
  );
}
