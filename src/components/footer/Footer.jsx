import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a href="#" className='footer_logo'>HASEEB</a>

<ul className='permalinks'>
<li><a href="#">Home</a></li>

<li><a href="#about">About</a></li>

<li><a href="#experience">Expeirience</a></li>

<li><a href="#services">Services</a></li>

<li><a href="#portfolio">Portfolio</a></li>

{/* <li><a href="#testimonials">Testimonials</a></li> */}

<li><a href="#contact">Contact</a></li>

</ul>

<div className="footer_socials">

<a href="https://facebook.com"><FaFacebook/></a> 
<a href="https://instagram.com"><FiInstagram/></a>
<a href="https://linkedin.com"><BsLinkedin/></a>


</div>

      </footer>
    </section>
  )
}

export default Footer