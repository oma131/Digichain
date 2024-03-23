// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Button from '../Buttons/Button';
import { NavLink } from "react-router-dom";

import './Navbar.css'; 
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar`}>
      <a href='#home' className={`logo`}>
        Digichain
      </a>

      <div
        className={`hamburger ${isActive ? 'active' : ''}`}
        onClick={toggleActiveClass}
      >
        <span className={`bar`}></span>
        <span className={`bar`}></span>
        <span className={`bar`}></span>
      </div>
      
      <ul className={`navMenu ${isActive ? 'active' : ''}`}>
        <li className='listItem' onClick={removeActive}>
          <a href='#home' className={`navLink`}>Home</a>
        </li>
        <li className='listItem' onClick={removeActive}>
          <a href='#home' className={`navLink`}>Api</a>
        </li>
        <div className='buttonContainer'>
          <NavLink to='/wallet'>
            <Button style={{ backgroundColor: '#6F4FF2', color: 'white', fontSize: '14px'}} >Connect Wallet</Button>
          </NavLink>
        </div>
      </ul>
      
      
    </nav>
  );
};

export default Navbar;

