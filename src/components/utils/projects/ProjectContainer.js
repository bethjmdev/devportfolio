import React from "react";
import "./ProjectContainer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faVideo, faGlobe } from "@fortawesome/free-solid-svg-icons";

function ProjectContainer({
  gitHub,
  loom,
  website,
  HeaderText,
  Description,
  TechText,
}) {
  return (
    <div className="projectcontainer">
      <div className="projectcontainer-container">
        <div className="image">
          <p>image</p>
        </div>
        <div className="project-details">
          <div className="text">
            <h4>{HeaderText}</h4>
            <p>{Description}</p>
            <p>{TechText}</p>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
