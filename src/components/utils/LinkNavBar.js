import React from "react";
import "./LinkNavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

function LinkNavBar({ className }) {
  return (
    <div className={className}>
      <div className="linkbar-container">
        {/* LinkedIn */}
        <FontAwesomeIcon icon={faLinkedin} />
        {/* GitHub */}
        <FontAwesomeIcon icon={faGithub} />
        {/* Resume ADD: on hover "resume"*/}
        <FontAwesomeIcon icon={faFile} />
        {/* Email?? */}
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
}

export default LinkNavBar;
