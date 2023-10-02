import personalized from '../../images/gp640-Personalized-Moving-Plans-Tailoring-Interstate-Removalist-Services-to-Your-Needs-web.jpg';
import packing from '../../images/Packing-and-Packaging-in-Logistics.png';
import furniture from '../../images/Furniture-dissembling-1.png';
import storage from '../../images/storage.jpg';

const Work = () => {
    return (
        <section className="what-we-do">
          <div className='card'>
            <div className='img-container'>
              <img src={packing} alt="TRUCKING" />
            </div>
            <h3>Packing</h3>
            <p>Professional packing and unpacking services. Providing high-quality packing materials, safely wrapping, protecting and setting up items.</p>
          </div>
          <div className='card'>
            <div className='img-container'>
              <img src={furniture} alt="WAREHOUSING" />
            </div>
            <h3>Furniture</h3>
            <p>Provide skilled technicians who can safely disassemble and reassemble furniture, ensuring that it arrives in good condition and can be set up quickly.</p>
          </div>
          <div className='card'>
            <div className='img-container'>
              <img src={storage} alt="CFS" />  
            </div>
            <h3>Storage Solutions</h3>
            <p>Offers secure and climate-controlled storage options, allowing clients to store their belongings in a safe place until they are ready to relocate.</p>
          </div>
          <div className='card'>
            <div className='img-container'>
              <img src={personalized} alt="COMMERCIAL" />
            </div>
            <h3>Personalized Planning</h3>
            <p>Personalized move planning and coordination, assigning a dedicated move coordinator to create a customized moving plan, and oversee the entire process.</p>
          </div>
        </section>
    )
}

export default Work