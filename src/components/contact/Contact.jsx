import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const data = [
  {
    id: 1,
    title: 'Email',
    subtitle: 'sametkoyuncu@live.com',
    urlText: 'Send a message',
    url: 'mailto:sametkoyuncu@live.com',
    icon: <MdOutlineEmail className='contact__option-icon' />
  },
  {
    id: 2,
    title: 'Messenger',
    subtitle: 'sametkoyuncu',
    urlText: 'Send a message',
    url: 'https://m.me/sametkoyunncu',
    icon: <RiMessengerLine />
  },
  {
    id: 3,
    title: 'WhatsApp',
    subtitle: '0123-456-78-90',
    urlText: 'Send a message',
    url: 'https://wa.me/01234567890',
    icon: <BsWhatsapp />
  }
]

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">

          {data.map(({id, title, subtitle, urlText, url, icon}) => (
            <article className="contact__option" key={id}>
              {icon}
              <h4>{title}</h4>
              <h5>{subtitle}</h5>
              <a href={url} target='_blank' rel='noreferrer'>{urlText}</a>
            </article>
          ))}
          
        </div>
        {/* end of contact options */}
        <form action=''>
            <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Messaage' required>
            <button type='submit' className='btn btn-primary'>Send Message</button>

          </textarea>
        </form>
      </div>
    </section>
  )
}

export default Contact