import './career.css';
import CareerHero from './sections/career';
import Company from './sections/company';
import Perk from './sections/perks';
import Join from './sections/join';

const Career = () => {
    return (
      <div className="career">
        <CareerHero />
        <Company />
        <Perk />
        <Join />
      </div>
    );
  };
  
  export default Career;