import msgDp from '../../images/message.jpeg' 

const Message = () => {
    return (
        <section className='message'>
        <div className='msg-img'>
          <img src={msgDp} alt='msgDp'/>
        </div>
        <div className='msg-text'>
          <h2>OUR MESSAGE</h2>
          <p>At RelocateBox, we encourage our team to come up with innovative ideas, strategic ways of thinking and bigger picture thinking to help our personal and professional growth.</p>
          <p>Our unstoppable commitment to finding comprehensive solutions for your needs has helped us build next level force.</p>
        </div>
      </section>
    );
};

export default Message;