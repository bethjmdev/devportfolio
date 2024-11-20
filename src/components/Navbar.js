import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <p>IMG</p>
          <p>Beth Mills</p>
        </div>
        <div className="nav-links">
          <p>Home</p>
          <p>About</p>
          <p>Work</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
