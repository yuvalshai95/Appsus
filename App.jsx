// imports Pages //
import {Home} from 'pages/Home.jsx';
import {MailApp} from 'pages/MailApp.jsx';
import {NoteApp} from 'pages/NoteApp.jsx';
import {BookApp} from 'pages/BookApp.jsx';
import {MailDetails} from 'apps/mail/pages/MailDetails.jsx';
import {BookDetails} from '/apps/book/pages/BookDetails.jsx';

// imports cmps //
import {Header} from 'cmps/Header.jsx';
import {Footer} from './cmps/Footer.jsx';

// import services//

//routing
const Router = ReactRouterDOM.HashRouter;
const {Route, Switch} = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <section className="app">
        <Header />
        <main>
          <Switch>
            <Route component={MailDetails} path="/mail/:mailId" />
            <Route component={BookDetails} path="/book/:bookId" />
            <Route component={BookApp} path="/book" />
            <Route component={NoteApp} path="/note" />
            <Route component={MailApp} path="/mail" />
            <Route component={Home} path="/" />
          </Switch>
        </main>
        <Footer />
      </section>
    </Router>
  );
}
