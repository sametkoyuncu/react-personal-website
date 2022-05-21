import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    id:1,
    name: "John Doe",
    image: AVTR1,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, commodi. Assumenda esse ut, iure veritatis eveniet in nostrum est odio distinctio nisi, quo dicta sequi?",
  },
  {
    id:2,
    name: "John Doe",
    image: AVTR2,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, commodi. Assumenda esse ut, iure veritatis eveniet in nostrum est odio distinctio nisi, quo dicta sequi?",
  },
  {
    id: 3,
    name: "John Doe",
    image: AVTR3,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, commodi. Assumenda esse ut, iure veritatis eveniet in nostrum est odio distinctio nisi, quo dicta sequi?",
  },
  {
    id: 4,
    name: "John Doe",
    image: AVTR4,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, commodi. Assumenda esse ut, iure veritatis eveniet in nostrum est odio distinctio nisi, quo dicta sequi?",
  },
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(item => (
            <article className="testimonial" key={item.id}>
              <div className="client__avatar">
                <img src={item.image} alt={item.name} />
              </div>
                <h5 className="client__name">{item.name}</h5>
                <small className='client__review'>{item.review}</small>
            </article>
          ))
        }
        
      </div>
    </section>
  )
}

export default Testimonials