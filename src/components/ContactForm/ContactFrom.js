import React from 'react';
import "./ContactForm.css"
const ContactFrom = () => {
    return (
        <div className='form-container'>
           <h1>Send a message to us</h1> 
           <form>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Subject' />
                <textarea placeholder='Message' name="" id="" cols="30" rows="4"></textarea>
                <button>Send Message</button>
           </form>
        </div>
    );
};

export default ContactFrom;