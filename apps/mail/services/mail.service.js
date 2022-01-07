import {utilService} from '../../../services/util.service.js';
import {storageService} from '../../../services/storage.service.js';
import {dummyDataService} from './mail.dummydata.service.js';

export const mailService = {
  query,
  toggleStar,
  deleteMailById,
  toggleRead,
  send,
  getEmailById,
};

const STORAGE_KEY = 'emailDB';
let gEmails = _getEmails();

function query(criteria = null) {
  let emails = storageService.loadFromStorage(STORAGE_KEY);

  if (!criteria) {
    const inboxEmails = emails.filter(email => email.status === 'inbox');
    return Promise.resolve(inboxEmails);
  }

  let {txt} = criteria;
  txt = txt.toLowerCase();

  let filteredByTxtEmails = gEmails.filter(mail => {
    return (
      mail.subject.toLowerCase().includes(txt) ||
      mail.body.toLowerCase().includes(txt) ||
      mail.from.toLowerCase().includes(txt)
    );
  });

  filteredByTxtEmails = filteredByTxtEmails ? filteredByTxtEmails : gEmails;

  let mailsToShow;
  switch (criteria.status) {
    case 'inbox':
      mailsToShow = filteredByTxtEmails.filter(mail => {
        return mail.status === 'inbox';
      });
      return Promise.resolve(mailsToShow);
    case 'starred':
      mailsToShow = filteredByTxtEmails.filter(mail => {
        return mail.isStarred;
      });
      return Promise.resolve(mailsToShow);
    case 'sent':
      mailsToShow = filteredByTxtEmails.filter(mail => {
        return mail.status === 'sent';
      });
      return Promise.resolve(mailsToShow);
    case 'trash':
      mailsToShow = filteredByTxtEmails.filter(mail => {
        return mail.status === 'trash';
      });
      return Promise.resolve(mailsToShow);
    case 'draft':
      mailsToShow = filteredByTxtEmails.filter(mail => {
        return mail.status === 'draft';
      });

      return Promise.resolve(mailsToShow);
  }
}

function getEmailById(id) {
  const mail = gEmails.find(mail => mail.id === id);
  return Promise.resolve(mail);
}

function send(email) {
  email = {
    id: utilService.makeId(),
    isRead: true,
    sentAt: Date.now(),
    status: 'sent',
    isStarred: false,
    ...email,
  };
  gEmails.unshift(email);
  _saveEmailsToStorage(gEmails);
  return Promise.resolve();
}

function toggleRead(id) {
  const mailIdx = gEmails.findIndex(mail => mail.id === id);
  gEmails[mailIdx].isRead = !gEmails[mailIdx].isRead;
  _saveEmailsToStorage(gEmails);
  return Promise.resolve();
}

function deleteMailById(id) {
  const mailIdx = gEmails.findIndex(email => email.id === id);
  // delete from trash
  if (gEmails[mailIdx].status === 'trash') gEmails.splice(mailIdx, 1);
  else {
    // check if email is starred first
    if (gEmails[mailIdx].isStarred) gEmails[mailIdx].isStarred = false;
    // move email to trash
    gEmails[mailIdx].status = 'trash';
  }
  _saveEmailsToStorage(gEmails);
  return Promise.resolve();
}

function toggleStar(id) {
  const mailIdx = gEmails.findIndex(mail => mail.id === id);
  gEmails[mailIdx].isStarred = !gEmails[mailIdx].isStarred;
  _saveEmailsToStorage(gEmails);
  return Promise.resolve();
}

function _getEmails() {
  let emails = storageService.loadFromStorage(STORAGE_KEY);
  if (!emails || !emails.length) {
    emails = dummyDataService.getDummyEmails();
  }
  _saveEmailsToStorage(emails);
  return emails;
}

function _saveEmailsToStorage(emails) {
  storageService.saveToStorage(STORAGE_KEY, emails);
}
