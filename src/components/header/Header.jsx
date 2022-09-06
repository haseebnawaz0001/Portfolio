import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import Socials from './socials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">

        <h5>Hello I'm</h5>

        <h1>Haseeb</h1>

        <h5 className="text-light">React Developer</h5>

        <CTA/>

        <Socials/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        
        <a href="#contact" className='scroll_down'>Scroll Down</a>

        

        

      </div>
    </header>
  )
}

export default Header