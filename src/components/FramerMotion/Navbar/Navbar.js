import React from 'react'
import { navLinks  } from '../../../Data'
import {socialIcons} from '../../../Data'
import './Navbar.scss'
 
function Navbar() {

  return (
    <div className='header'>
    <div className="nav__container">
        <div className='logo'>
            <h2>Thiru</h2>
        </div>
        <ul className='nav__links'>
            {navLinks.map((navLink, index) =>{
                return <li key={index}>
                    <a href={`#${navLink}`}>{navLink}</a>
                </li>
            })}
        </ul>
        <div className='social__icons'>

            {socialIcons.map((socialIcon, index) =>{
                return(
                    <div>{socialIcon}</div>
                );
            })}
        </div>
      </div>
    </div>
  )
}

export default Navbar;