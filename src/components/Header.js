import React from "react";

import "./Header.css";
import PurpleButton from "./utils/PurpleButton";
import LinkNavBar from "./utils/LinkNavBar";

function Header() {
  return (
    <>
      <div className="header" id="Header">
        <div className="header-container">
          <h1>Hey, I'm Beth Mills</h1>
          <p>
            I’m a Full Stack Developer who embraces big challenges, values clear
            communication, and thrives on collaborative growth through
            actionable feedback. I’m constantly learning and creating practical,
            impactful tools along the way.
          </p>
          <PurpleButton padding=".9rem 2.5rem" fontSize="1rem">
            work experience
          </PurpleButton>
        </div>
        <LinkNavBar className="LinkBar" />
      </div>
    </>
  );
}

export default Header;
