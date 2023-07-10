import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CircularImage from '../../UiComponents/CircularImage';
import DarkModeToggle from '../../UiComponents/DarkModeToggle';

const Navbar = () => {
   const [isNavbarExpanded, setNavbarExpanded] = useState(true);

   // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
   window.onscroll = () => adjustNavbarHeight();

   const adjustNavbarHeight = () => {
      if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
         setNavbarExpanded(false); 

         document.getElementById("header-container").style.height = "40px";
         document.getElementById("profile-image-container").style.width = "40px";
         document.getElementById("profile-image-container").style.height = "40px";

         document.getElementById("title-wrapper").style.opacity = "0";
      } else {
         setNavbarExpanded(true);

         document.getElementById("header-container").style.height = "200px";
         document.getElementById("profile-image-container").style.width = "120px";
         document.getElementById("profile-image-container").style.height = "120px";

         document.getElementById("title-wrapper").style.opacity = "1";
      }
   }

  return (
   <div id="header-container">
      <div id="title-wrapper">
         <div id="profile-image-container">
            <CircularImage className="profile-image" src={`${process.env.PUBLIC_URL}/images/profile-image.jpg`} alt="Luca Wiehe" />
         </div>
         <div className="title">
            <span className="first-name">Luca Mattes </span>
            <span className="surname">Wiehe</span>
         </div>
         <p className="job-title">Student at Technical University of Munich</p>
      </div>
      <ul className={`menu-items${isNavbarExpanded ? "" : " active"}`}>
         <li className="main-item">LUCA<span>WIEHE</span></li>
         <li>
            <Link className="link" to="/education/">
               Education
            </Link>
         </li>
         <li>
            <Link className="link" to="/work/">
               Work
            </Link>
         </li>
         <li>
            <Link className="link" to="/projects/">
               Projects
            </Link>
         </li>
         <li>
            <Link className="link" to="/awards/">
               Awards
            </Link>
         </li>
      </ul>
      <div className={`dark-toggle${isNavbarExpanded ? "" : " active"}`}>
         <DarkModeToggle  />
      </div>
   </div>
  );
}

export default Navbar;