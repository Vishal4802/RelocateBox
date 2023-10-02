import './about.css';
import Hero from './sections/hero.js'
import Gallary from './sections/gallary.js';
import Message from './sections/message.js';
import Reviews from './sections/reviews.js';
import Team from './sections/team.js';

const About = () => {
    return (
    <div className="about">
      <Hero />
      <Message />
      <Reviews />
      <Team />
      <Gallary />
    </div>
    );
  };
  
  export default About;