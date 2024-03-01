
import React, { useRef } from 'react';
import './Contact.css'
import fb from '../assets/facebook-icon.png'
import tw from '../assets/github.png'


import twte from '../assets/instagram.png'
import twtee from '../assets/linkedin-logo-png-2037.png'


import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => 
  {
    e.preventDefault();

    emailjs
      .sendForm('service_yl24h48', 'template_sbw8x7d', form.current, 
         'ScBDHjNqj55XUZ8cG')
      
      .then((result)=>
      {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent!');
      },(error)=>{
        console.log(error.text);
      });

      };

        
  

  return (
    <section id='contactPage'>
    <div id='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='contactDes'>please fill out the form to discuss</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='your name' name='your_name'/>
            <input type="email" className='email' placeholder='enter email'name='your_email' />
            <textarea  className='msg'name="message" rows="5" placeholder='your message'></textarea>
            <button type='submit'  value='Send'className='submitBtn'>Submit</button>
            <div className="links">
                <img src={fb}alt="" className="link"  />
               
                
                <img src={tw}alt="" className="link" />
                <img src={twte}alt="" className="link" />
                <img src={twtee}alt="" className="link" />
                
            </div>
        </form>

    </div>
    </section>
  )
}

export default Contact