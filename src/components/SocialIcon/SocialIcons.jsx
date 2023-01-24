import React from 'react'
import { FaDribbble, FaInstagram, FaLinkedin  } from 'react-icons/fa';
import './SocialIcons.css'

function SocialIcons() {
  return (
    <div className='icons'>
     <div className='Icon'>
       <FaInstagram />
       <FaLinkedin />
       <FaDribbble />
       </div>
    </div>
  )
}

export default SocialIcons