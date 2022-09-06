import React from 'react';
import './About.css';
import ME from '../../assets/ME.png'
import {BiBook} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'
import {MdSnippetFolder} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>

        <div className='about_me'>

          <div className='about_me_img'>

            <img src={ME} alt="about_img" />

          </div>

        </div>

            <div className='about_content'>

              <div className='about_cards'>

                <article className='card'>

                  <BiBook className='about_icon'/>
                  <h5>Experience</h5>
                  <small>3+ Years Working</small>
                
                </article>

                <article className='card'>
                
                  <FaUser className='about_icon'/>
                  <h5>Clients</h5>
                  <small>300+ Worldwide</small>
                
                </article>

                <article className='card'>
                
                  <MdSnippetFolder className='about_icon'/>
                  <h5>Projects</h5>
                  <small>80+ Completed Projects</small>
                
                </article>

              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi veniam consequatur nihil! Nobis, amet perferendis nesciunt quasi veniam odio dicta! Eum quibusdam, rerum pariatur nulla necessitatibus nisi quidem laboriosam!</p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>

            </div>

      </div>

    </section>
  )
}

export default About