import gallary1 from '../../images/gallary1.jpg'
import gallary2 from '../../images/gallary2.jpg'
import gallary3 from '../../images/gallary3.jpg'
import gallary4 from '../../images/gallary4.jpg'
import gallary5 from '../../images/gallary5.jpeg'
import gallary6 from '../../images/gallary6.jpeg'
import gallary7 from '../../images/gallary7.jpeg'
import gallary8 from '../../images/gallary8.jpeg'

const Gallary = () => {
    return (
        <section className='gallary'>
        <h2>OUR GALLARY</h2>
        <div>
          <img src={gallary1} alt='gallary1'/>
          <img src={gallary2} alt='gallary2'/>
          <img src={gallary3} alt='gallary3'/>
          <img src={gallary4} alt='gallary4'/>
          <img src={gallary5} alt='gallary5'/>
          <img src={gallary6} alt='gallary6'/>
          <img src={gallary7} alt='gallary7'/>
          <img src={gallary8} alt='gallary8'/>
        </div>
      </section>
    );
};

export default Gallary;