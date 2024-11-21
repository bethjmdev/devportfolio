import React from "react";
import "./ProjectContainer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faVideo, faGlobe } from "@fortawesome/free-solid-svg-icons";

function ProjectContainer({
  gitHub,
  linkedIn,
  loom,
  website,
  image,
  HeaderText,
  dates,
  Description,
  TechText,
  direction,
}) {
  return (
    <div className="projectcontainer">
      <div
        className={`projectcontainer-container ${
          direction === "row" ? "row" : "row-reverse"
        }`}
      >
        <div className="image">
          <img src={image} alt={"work experience photo"} />
        </div>
        <div className="project-details">
          <div className="text">
            <h3>{HeaderText}</h3>
            {dates && (
              <strong>
                <p>{dates}</p>
              </strong>
            )}
            <p>{Description}</p>
            <br />
            <p>
              <strong>Tech:</strong> {TechText}
            </p>
          </div>
          <div className="icons">
            {gitHub && (
              <a href={gitHub} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {linkedIn && (
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            )}
            {loom && (
              <a href={loom} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faVideo} />
              </a>
            )}

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
