import React from 'react'
import './Portfolio.css'
import MAILAPP from '../../assets/mail.webp'
import MUSIC from '../../assets/music_stream.webp'
import SOCIAL from '../../assets/social.webp'
import TOUR from '../../assets/tour.webp'
import CRYPTO from '../../assets/cryto.webp'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>

          <div className='portfolio_item_img'>
            <img src={MAILAPP} alt="" />
          </div>
          <h3>This Is a Portfolio Item Title</h3>

          <div className='portfolio_cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>

        <article className='portfolio_item'>

          <div className='portfolio_item_img'>
            <img src={MUSIC} alt="" />
          </div>
          <h3>This Is a Portfolio Item Title</h3>
          <div className='portfolio_cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>

        <article className='portfolio_item'>

          <div className='portfolio_item_img'>
            <img src={SOCIAL} alt="" />
          </div>
          <h3>This Is a Portfolio Item Title</h3>
          <div className='portfolio_cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>

          <div className='portfolio_item_img'>
            <img src={TOUR} alt="" />
          </div>
          <h3>This Is a Portfolio Item Title</h3>
          <div className='portfolio_cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>

          <div className='portfolio_item_img'>
            <img src={CRYPTO} alt="" />
          </div>
          <h3>This Is a Portfolio Item Title</h3>
          <div className='portfolio_cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>

      </div>

    </section>
  )
}

export default Portfolio