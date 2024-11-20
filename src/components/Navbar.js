import { React, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <p>IMG</p>
          <p>Beth Mills</p>
        </div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#Header">Home</a>
          <a href="#About">About</a>
          <a href="#Experience">Work</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
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
