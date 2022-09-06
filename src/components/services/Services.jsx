import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Am Offering</h5>
      <h2>Services</h2>
      

      <div className='container services_container'>
        <article className='service'>

          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
          </ul>

        </article>


        <article className='service'>

          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
          </ul>

        </article>


        <article className='service'>

          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
              <li>
                  <BiCheck className='service_list_icons'/>
                  <p>Lorem ipsum, dolor sit amet adipisicing.</p>
              </li>
          </ul>

        </article>


      </div>
    </section>
  )
}

export default Services