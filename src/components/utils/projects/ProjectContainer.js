import React from "react";
import "./ProjectContainer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faVideo, faGlobe } from "@fortawesome/free-solid-svg-icons";

function ProjectContainer({ gitHub, loom, website, HeaderText, ParaText }) {
  return (
    <div>
      <div className="icons">
        <a href={gitHub} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={loom} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faVideo} />
        </a>
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        )}
      </div>
      <div className="text">
        <p>{HeaderText}</p>
        <p>{ParaText}</p>
      </div>
    </div>
  );
}

export default ProjectContainer;
