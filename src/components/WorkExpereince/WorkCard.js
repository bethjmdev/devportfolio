import React from "react";
import "./WorkCard.css";

const WorkCard = ({
  title,
  image,
  position,
  date,
  githubLink,
  description,
  skills,
  webLink,
}) => {
  return (
    <div className="container">
      <div className="card">
        <a href={webLink}>
          <img src={image} alt={title} />
        </a>
        <h2>{title}</h2>
        <h3>
          {position} || {date}
        </h3>
        <div className="clickable-links">
          <a href={githubLink}>
            <button className="github_button">View GitHub</button>
          </a>
          <a href={webLink}>
            <button className="github_button">View App</button>
          </a>
        </div>
        <p>{description}</p>
        <div className="container-2">
          {skills.map((skill, index) => (
            <div key={index} className="grid-item-2">
              <h4>{skill}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
