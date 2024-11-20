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
          <p>Home</p>
          <p>About</p>
          <p>Work</p>
          <p>Projects</p>
          <p>Contact</p>
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
