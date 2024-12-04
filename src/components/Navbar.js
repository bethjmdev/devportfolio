import { React, useState } from "react";
import "./NavBar.css";

import NavImage from "../images/NavImage.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={NavImage} alt="</>" />
          <p>Beth Mills</p>
        </div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#Header">Home</a>
          <a href="#About">About</a>
          <a href="#Experience">Work</a>
          <a href="#Projects">Projects</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
