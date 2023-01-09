import React from 'react';
import './Header.css';
import CircularImage from '../../UiComponents/CircularImage';
import DarkModeToggle from '../../UiComponents/DarkModeToggle';

function Header() {
  return (
   <div className="header-container">
      <div className="grid-container">
         <div className="title">
            <span className="first-name">Luca Mattes </span>
            <span className="surname">Wiehe</span>
         </div>
         <p className="subtitle">Student at Technical University of Munich</p>
         <div className="profile-image-container">
            <CircularImage className="profile-image" src={`${process.env.PUBLIC_URL}/images/profile-image.jpg`} alt="Luca Wiehe" />
         </div>
      </div>
      <div className="dark-toggle">
         <DarkModeToggle />
      </div>
   </div>
  );
}

export default Header;