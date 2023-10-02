import story from '../../images/story-image.jpeg';

const Story = () => {
    return (
        <section className='story'>
          <div className='story-text'>
            <h2>OUR STORY</h2>
            <p>We are a customs bonded relocation services providing company and we have been in service for over 10 years and are fully committed to providing the best service for our customers. We started our journey in 2013 and we are located in India and specialize in relocating and costumization.</p>
            <a href='/about' className='more'>MORE ABOUT US</a>
          </div>
          <div className='story-image'>
            <img src={story} alt='relocating'/>
          </div>
          <div className='core-values'>
            <div>
              <h3>CORE VALUES</h3>
              <ul>
                <li>A commitment to sustainability and to acting in an environmentally friendly way.</li>
                <li>A commitment to provide innovation and excellence through our extraordinary services.</li>
                <li>A commitment to doing good for the whole world and to bring huge value for the whole generation.</li>
                <li>A commitment to helping everyone regardless of age, gender, religion, status, etc.</li>
              </ul>
            </div>
          </div>
        </section>
    )
}

export default Story