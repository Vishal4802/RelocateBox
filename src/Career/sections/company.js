import companyTogether from '../../images/company-meet.jpeg'

const Company = () => {
    return (
        <section className='company'>
          <h2>JOIN OUR TEAM</h2>
          <div className='company-meet'>
            <div className='company-meet-img'>
              <img src={companyTogether} alt='company meet'/>
            </div>
            <div className='company-meet-text'>
              <h2>WANNA WORK WITH US?</h2>
              <p>At RelocateBox, you will feel like part of a family and enjoy the many benefits that come with being a part of our team including great pay for every team member.</p>
              <p>We are dedicated to taking care of our people and giving them the opportunity they deserve to achieve their goals.</p>
            </div>
          </div>
        </section>
    )
}

export default Company