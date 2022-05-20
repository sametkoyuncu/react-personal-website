import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    title: "This is a portfolio item title",
    image: IMG1,
    btnUrl1: "http://github.com",
    btnUrl2: "http://github.com",
  },
  {
    id:2,
    title: "This is a portfolio item title",
    image: IMG2,
    btnUrl1: "http://github.com",
    btnUrl2: "http://github.com",
  },
  {
    id: 3,
    title: "This is a portfolio item title",
    image: IMG3,
    btnUrl1: "http://github.com",
    btnUrl2: "http://github.com",
  },
  {
    id: 4,
    title: "This is a portfolio item title",
    image: IMG4,
    btnUrl1: "http://github.com",
    btnUrl2: "http://github.com",
  },
  {
    id: 5,
    title: "This is a portfolio item title",
    image: IMG5,
    btnUrl1: "http://github.com",
    btnUrl2: "http://github.com",
  },
  {
    id: 6,
    title: "This is a portfolio item title",
    image: IMG6,
    btnUrl1: "http://github.com",
    btnUrl2: "http://github.com",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(item => (
          <article className="portfolio__item" kyy={item.id}>
          <div>
            <img  className="portfolio__item-image" src={item.image} alt="portfolio_image" />
          </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.btnUrl1} className='btn' target='_blank'>Github</a>
              <a href={item.btnUrl2} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio