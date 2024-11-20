import React from "react";
import "./Header.css";
import PurpleButton from "./utils/PurpleButton";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <h1>Hey, I'm Beth Mills</h1>
        <p>
          I'm a full-stack developer at Hōmbaez, creating tools to help home
          buyers save money. I value tackling challenges head-on, teamwork,
          growth, and clear communication.
        </p>
        <PurpleButton padding=".9rem 2.5rem" fontSize="1rem">
          work experience
        </PurpleButton>
      </div>
    </div>
  );
}

export default Header;
