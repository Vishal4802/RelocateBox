import relocationIcon from '../../images/relocaion-emoji.webp';
import happy from '../../images/happiness.svg';
import packageEmoji from '../../images/package-vector.svg';
import distance from '../../images/distance-svgrepo-com.svg';

const Achievement = () => {
    return (
        <section className="achievements">
          <h2>OUR STATS</h2>
          <div className='achievements-grid'>
            <div className='firstDiv'>
              <div>
                <img src={relocationIcon} alt='a'/>
              </div>
              <h3>7000+</h3>
              <p>Relocations</p>
            </div>
            <div className='firstDiv down'>
              <div>
                <img src={happy} alt='a'/>
              </div>
              <h3>800+</h3>
              <p>Happy Clients</p>
            </div>
            <div className='firstDiv'>
              <div>
                <img src={packageEmoji} alt='a'/>
              </div>
              <h3>3000+</h3>
              <p>Packages Stored</p>
            </div>
            <div className='firstDiv down'>
              <div>
                <img src={distance} alt='a'/>
              </div>
              <h3>20000+</h3>
              <p>Miles Travelled</p>
            </div>
          </div>
        </section>
    )
}

export default Achievement