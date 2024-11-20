import React from "react";
import "./LinkNavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

function LinkNavBar({ className }) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("bethjmdev@gmail.com")
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <div className={className}>
      <div className="linkbar-container">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/bethjmdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/bethjmdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {/* resume */}
        <a
          href="https://docs.google.com/document/d/1SJ3WMdccEwwg8AqQ0RmXuUAr5-CEZ7up8gNjkXu7N5Y/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFile} />
        </a>
        {/* Email */}
        <a onClick={copyToClipboard} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default LinkNavBar;
