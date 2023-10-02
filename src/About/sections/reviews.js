import review1 from '../../images/review1.jpeg'
import review2 from '../../images/review2.jpeg'
import review3 from '../../images/review3.jpeg'
import review4 from '../../images/review4.webp'

const Reviews = () => {
    return (
        <section className='reviews'>
        <h2>CLIENTS REVIEWS</h2>
        <div className='review-grid'>
          <div className='grid-item'>
            <div className='reviewer'>
              <div className='review-img'>
                <img src={review1} alt='review1' />
              </div>
              <div>
                <h3>Priyanka Saini</h3>
              </div>
            </div>
            <div className='comment'>Your services made our move effortless. From packing to unpacking, they were professional and efficient. Highly recommend!</div>
          </div>
          <div className='unwanted'></div>
          <div className='unwanted'></div>
          <div className='grid-item'>
            <div className='reviewer'>
              <div className='review-img'>
                <img src={review2} alt='review2' />
              </div>
              <div>
                <h3>Vinit Srivastav</h3>
              </div>
            </div>
            <div className='comment'>RelocationBox exceeded expectations. Movers were punctual, careful, and communication was superb. Top-notch service!</div>
          </div>
          <div className='grid-item'>
            <div className='reviewer'>
              <div className='review-img'>
                <img src={review3} alt='review3' />
              </div>
              <div>
                <h3>Charles Joshef</h3>
              </div>
            </div>
            <div className='comment'>You aced our cross-country move. Organized, safe, and reliable. Trustworthy for long-distance moves.</div>
          </div>
          <div className='unwanted'></div>
          <div className='unwanted'></div>
          <div className='grid-item'>
            <div className='reviewer'>
              <div className='review-img'>
                <img src={review4} alt='review4' />
              </div>
              <div>
                <h3>Jessica Jean</h3>
              </div>
            </div>
            <div className='comment'>RelocationBox, a trustworthy choice. Transparent pricing, friendly team, and impeccable service. Highly recommended!</div>
          </div>
        </div>
      </section>
    );
};

export default Reviews;