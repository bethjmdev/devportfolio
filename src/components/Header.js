import React from "react";

import "./Header.css";
import PurpleButton from "./utils/PurpleButton";
import LinkNavBar from "./utils/LinkNavBar";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <h1>Hey, I'm Beth Mills</h1>
        <p>
          I’m a Full Stack Developer who dives into big challenges, values clear
          communication, and thrives on collaborative growth through actionable
          feedback, constantly learning and building practical and impactful
          tools along the way.
        </p>
        <PurpleButton padding=".9rem 2.5rem" fontSize="1rem">
          work experience
        </PurpleButton>
        <LinkNavBar className="LinkBar" />

        {/* if on mobile I want the social liknks buttons to go down here */}
      </div>
    </div>
  );
}

export default Header;
