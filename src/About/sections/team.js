import ceo from '../../images/ceo.jpeg'
import vp from '../../images/VP.webp'
import head from '../../images/head.webp'

const Team = () => {
    return (
        <section className='team'>
        <h2 className='team-head'>OUR TEAM</h2>
        <div className='team-card'>
          <div>
            <img src={ceo} alt='CEO' />
            <h2>Rajveer Singh</h2>
            <h3>Founder & Ceo</h3>
          </div>
          <div>
            <img src={vp} alt='VP'/>
            <h2>Mandeep Sharma</h2>
            <h3>Vice Precident</h3>
          </div>
          <div>
            <img src={head} alt='head'/>
            <h2>Harpareet Maan</h2>
            <h3>Management Head</h3>
          </div>
        </div>
      </section>
    );
};

export default Team;