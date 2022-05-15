import React from 'react'
import './experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const dataFrontend = [
  {title: "HTML", description: "Experienced"},
  {title: "CSS", description: "Intermediate"},
  {title: "JavaScript", description: "Experienced"},
  {title: "Bootstrap", description: "Experienced"},
  {title: "Tailwind", description: "Experienced"},
  {title: "React", description: "Experienced"},
]

const dataBackend = [
  {title: "Node.js", description: "Experienced"},
  {title: "MongoDB", description: "Intermediate"},
  {title: "PHP", description: "Experienced"},
  {title: "MySQL", description: "Basic"},
  {title: "Python", description: "Experienced"},
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {dataFrontend.map(item => (
              <article className='experience__details'  key={item.title}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{item.title}</h4>
                  <small className='text-light"'>{item.description}</small>
                </div>
            </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {dataBackend.map(item => (
              <article className='experience__details' key={item.title}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{item.title}</h4>
                  <small className='text-light"'>{item.description}</small>
                </div>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience