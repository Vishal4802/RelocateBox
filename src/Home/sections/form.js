import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pickUp: '',
        drop: '',
        budget: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Format the receipt content
        const receiptContent = `
          Booking Details:
    
          Name: ${formData.name}
          Email: ${formData.email}
          Pick Up Location: ${formData.pickUp}
          Drop Location: ${formData.drop}
          Budget: $${formData.budget}
          
          Have a nice Day :)
        `;
    
        // Create a Blob containing the receipt content
        const blob = new Blob([receiptContent], { type: 'text/plain' });
    
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);
    
        // Create an anchor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'order_receipt.txt';
    
        // Trigger a click event on the anchor
        anchor.click();
    
        // Revoke the Blob URL to release resources
        URL.revokeObjectURL(url);
      };

    return (
        <section className='booking' id='booking'>
          <div className='booking-text'>
            <h2>Book Now</h2>
            <p>Fill the booking form by providing the details, get the receipt and we will get back to you with answers within as soon as possible</p>
            <ul>
              <li>GREAT CUSTOMER SUPPORT</li>
              <li>FAST RESPONSE</li>
              <li>ACTIVE EVERYDAY</li>
            </ul>
          </div>
          <div className='formDiv'>
          <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="EMAIL"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="pickUp"
          placeholder="PICK UP LOCATION"
          value={formData.pickUp}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="drop"
          placeholder="DROP LOCATION"
          value={formData.drop}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="budget"
          placeholder="BUDGET"
          value={formData.budget}
          onChange={handleInputChange}
          required
        />
        <input type="submit" id='submit' value="Book Now" />
      </form>
          </div>
        </section>
    )
}

export default Form