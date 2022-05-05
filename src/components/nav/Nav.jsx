import {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const handleClick = (sectionId) => {
    setActiveNav(sectionId)
  }
  
  return (
    <nav>
      {/* TODO: burayı temizle */}
      <a href='#' className={activeNav === '#' ? 'active' : ''} 
      onClick={() => handleClick('#')}>
        <AiOutlineHome />
      </a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''} 
      onClick={() => handleClick('#about')}>
        <AiOutlineUser />
      </a>
      <a href='#experience' className={activeNav === '#experience' ? 'active' : ''} 
      onClick={() => handleClick('#experience')}>
        <BiBook />
      </a>
      <a href='#services' className={activeNav === '#services' ? 'active' : ''} 
      onClick={() => handleClick('#services')}>
        <RiServiceLine />
      </a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} 
      onClick={() => handleClick('#contact')}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav