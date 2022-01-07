import {About} from '../cmps/About.jsx';
import {Cards} from '../cmps/Cards.jsx';
import {Hero} from '../cmps/Hero.jsx';

const {Link} = ReactRouterDOM;

export function Home() {
  return (
    <section className="home">
      <div className="main-container">
        <Hero />
      </div>
      <section id="cards" className="cards-container main-layout">
        <h3 className="cards-title">Our Features</h3>
        <Cards />
      </section>

      <section className="about-container main-layout">
        <h3 className="about-title">Our Team</h3>
        <About />
      </section>
    </section>
  );
}
