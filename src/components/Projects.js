import React from "react";
import "./Projects.css";
import ProjectContainer from "../components/utils/projects/ProjectContainer";

function Projects() {
  return (
    <div id="Projects">
      <ProjectContainer
        gitHub={"youtube.com"}
        loom={"youtube.com"}
        website={"youtube.com"}
        HeaderText={"hello"}
        ParaText={"hi there"}
      />
    </div>
  );
}

export default Projects;
