import './home.css';
import Story from './sections/story.js';
import Hero from './sections/home-hero.js';
import Work from './sections/whatWeDo.js';
import Achievement from './sections/achievement';
import Form from './sections/form';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className='home'>
        <div className='book-button'>
          <a href='#booking'>Book</a>
        </div>
        <div className='book-button about-button'>
          <Link to='/about'>About</Link>
        </div>
        <Hero />
        <Work />
        <Story />
        <Achievement />
        <Form />
      </div>
    );
  };
  
  export default Home;