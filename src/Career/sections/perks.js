import food from '../../images/food.png'
import dollar from '../../images/dollar.png'
import happy from '../../images/happiness.svg'
import shield from '../../images/security.png'

const Perk = () => {
    return (
        <section className="perks">
          <h2>PERKS</h2>
          <div className='perks-grid'>
            <div className='firstDiv'>
              <div>
                <img src={food} alt='food'/>
              </div>
              <h3>Free delicious food and snacks for everyone</h3>
            </div>
            <div className='firstDiv'>
              <div>
                <img src={dollar} alt='dollar'/>
              </div>
              <h3>Good pay so you don't have to worry financially</h3>
            </div>
            <div className='firstDiv'>
              <div>
                <img src={happy} alt='happy'/>
              </div>
              <h3>Good pay so you don't have to worry financially</h3>
            </div>
            <div className='firstDiv'>
              <div>
                <img src={shield} alt='shield'/>
              </div>
              <h3>We provide free medical insurance for everyone</h3>
            </div>
          </div>
        </section>
    )
}

export default Perk