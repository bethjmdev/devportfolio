import React from "react";
import "./Projects.css";
import ProjectContainer from "../components/utils/projects/ProjectContainer";

function Projects() {
  return (
    <div id="Projects" className="projects">
      <div className="project-container">
        <div className="title">
          <h2>Projects</h2>
          <hr id="hr" />
        </div>

        <ProjectContainer
          gitHub={"youtube.com"}
          loom={"youtube.com"}
          website={"youtube.com"}
          HeaderText={"hello"}
          ParaText={"hi there"}
        />
        <ProjectContainer
          gitHub={"youtube.com"}
          loom={"youtube.com"}
          website={"youtube.com"}
          HeaderText={"hello"}
          ParaText={"hi there"}
        />
        <ProjectContainer
          gitHub={"youtube.com"}
          loom={"youtube.com"}
          website={"youtube.com"}
          HeaderText={"hello"}
          ParaText={"hi there"}
        />
      </div>
    </div>
  );
}

export default Projects;
