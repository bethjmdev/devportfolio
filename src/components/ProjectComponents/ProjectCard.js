// ProjectCard.js
import React from "react";
import Modal from "../Modal/Modal";

import site from "../images/world-wide-web.png";

const ProjectCard = ({
  imageSrc,
  githubLink,
  loomLink,
  siteLink,
  altText,
  title,
  description,
  techStack,
  showModal,
  onClose,
}) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={altText} />
      <div className="clickable-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/github/github-original.svg"
            alt="GitHub"
          />
        </a>
        <a href={loomLink} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="youtube"
          >
            <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
          </svg>
        </a>
        {siteLink && (
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            <img src={site} alt="globe signifying world wide web" />
          </a>
        )}
        {showModal && (
          <button onClick={onClose}>
            {/* Add your modal SVG here */}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="image"
            >
              <path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a2.81,2.81,0,0,0,.49-.05l.3-.07.07,0h0l.05,0,.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79,3.79,0,0,0,.38-.32l.07-.09a2.69,2.69,0,0,0,.27-.32l.09-.13a2.31,2.31,0,0,0,.18-.35,1,1,0,0,0,.07-.15c.05-.12.08-.25.12-.38l0-.15A2.6,2.6,0,0,0,22,19V5A3,3,0,0,0,19,2ZM5,20a1,1,0,0,1-1-1V14.69l3.29-3.3h0a1,1,0,0,1,1.42,0L17.31,20Zm15-1a1,1,0,0,1-.07.36,1,1,0,0,1-.08.14.94.94,0,0,1-.09.12l-5.35-5.35.88-.88a1,1,0,0,1,1.42,0h0L20,16.69Zm0-5.14L18.12,12a3.08,3.08,0,0,0-4.24,0l-.88.88L10.12,10a3.08,3.08,0,0,0-4.24,0L4,11.86V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM13.5,6A1.5,1.5,0,1,0,15,7.5,1.5,1.5,0,0,0,13.5,6Z"></path>
            </svg>
          </button>
        )}
        {showModal && <Modal onClose={onClose} show={showModal} />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="container-2">
        {techStack.map((tech, index) => (
          <div key={index} className="grid-item-2">
            <h4>{tech}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
