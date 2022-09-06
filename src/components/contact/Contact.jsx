import React from 'react'
import './Contact.css'
import {MdMail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>

          <div className='contact_options'>

            <article className='contact_option'>
              <MdMail className='contact_icon'/>
              <h4>Email</h4>
              <h5>haseebnawaz0001@gmail.com</h5>
              <a href="mailto:haseebnawaz0001@gmail.com" target="_blank"> Send a message</a>
            </article>

            <article className='contact_option'>
              <IoLogoWhatsapp className='contact_icon'/>
              <h4>Whatsapp</h4>
              <a href="https://api.whatsapp.com/send?phone=+923469554320" target="_blank"> Send a message</a>
            </article>

          </div>

          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

      </div>
      
    </section>
  )
}

export default Contact