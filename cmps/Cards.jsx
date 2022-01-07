import {} from '../assets/img/gmail.';
import {GmailSvg} from './GmailSvg.jsx';
import {KeepLogo} from './KeepLogo.jsx';
import {BookLogo} from './BookLogo.jsx';

const {Link} = ReactRouterDOM;

export function Cards() {
  // const cards = [{ link: '/note', svg: <svg height="2500" viewBox="0 23 512 465.455" width="2500" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="139.636" cy="162.636" fill="#4285f4" r="139.636" /><circle cx="372.364" cy="232.455" fill="#ea4335" r="69.818" /><circle cx="372.364" cy="407" fill="#fbbc05" r="81.455" /><circle cx="477.091" cy="151" fill="#34a853" r="34.909" /></g></svg>, },
  // { link: '/mail', svg: <svg height="2500" viewBox="0 23 512 465.455" width="2500" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="139.636" cy="162.636" fill="#4285f4" r="139.636"/><circle cx="372.364" cy="232.455" fill="#ea4335" r="69.818"/><circle cx="372.364" cy="407" fill="#fbbc05" r="81.455"/><circle cx="477.091" cy="151" fill="#34a853" r="34.909"/></g></svg> }]
  //     .map((card,idx) =>
  //         <div key={idx} className="card-container">
  //             {card.svg}
  //             <h3>Lorem, ipsum dolor.</h3>
  //         <p>Lorem ipsum dolor sit amet consectetur</p>
  //         <Link to ={card.link} >
  //             <div className="card-btn"></div>
  //         </Link>
  //     </div>)

  return (
    <React.Fragment>
      <div className="card-container">
        <div className="card">
          <GmailSvg />
          <h3>Appsus email</h3>
          <p>Appsus email is email that's intuitive, efficient, and useful.</p>
          <Link to="/mail">
            <div className="card-btn">Try Me</div>
          </Link>
        </div>
        <div className="card">
          <KeepLogo />
          <h3>Appsus keep</h3>
          <p>Capture what's on your mind. Add notes, lists and photos to Appsus Keep.</p>
          <Link to="/note">
            <div className="card-btn">Try Me</div>
          </Link>
        </div>
        <div className="card">
          <BookLogo />
          <h3>Appsus books</h3>
          <p>Appsus Books lets you lose yourself in the best books right on your device.</p>
          <Link to="/book">
            <div className="card-btn">Try Me</div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
