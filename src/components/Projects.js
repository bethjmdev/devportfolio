// Projects.js
import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectComponents/ProjectCard";

import foodapp from "./images/foodapp.png";
import dmdock from "./images/dmdock.png";
import woods from "./images/lostinwoods.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <span className="line"></span>

      <div className="container">
        <ProjectCard
          imageSrc={dmdock}
          githubLink="https://github.com/bethjm/dmdock-front-end.git"
          loomLink="https://www.loom.com/share/79a18aa78f994443b3b9c99917aa87a3"
          siteLink="https://dmdock.netlify.app/"
          altText="a photo of DMDock Monster API"
          title="DM DOCK"
          description="An online app for D&D Game Masters to easily access campaign details during gameplay. This allows them to research new monsters and save them to favorites. They are also able to save data about their players to easily access and change during gameplay."
          techStack={[
            "Python",
            "Django",
            "PostgreSql",
            "JWT",
            "React.js",
            "JavaScript",
            "React Router",
            "Bulma.io",
          ]}
        />

        <ProjectCard
          imageSrc={foodapp}
          githubLink="https://github.com/bethjm/FoodOrderApp.git"
          loomLink="https://www.loom.com/share/5703f9eeea374bf3a957191f06b5a25d"
          siteLink="https://foodapp-bethjmdev.netlify.app/"
          altText="a photo of Beth's food app project"
          title="Restaurant Order App"
          description="Order App allows meal items to be added and removed from the cart. As items are added or removed the total in the cart is adjusted to reflect the updated cost."
          techStack={["React.js", "JavaScript", "Module Stylesheet"]}
        />

        <ProjectCard
          imageSrc={woods}
          githubLink="https://github.com/Brett-Abramson/project_3_frontend"
          loomLink="https://www.loom.com/share/4a9cb9ff498d404d8b9e682739e0b3ee"
          siteLink="https://lost-in-the-woods.herokuapp.com/"
          altText="a photo of DMDock Monster API"
          title="Lost In The Woods"
          description="Lost In The Woods is an app for outdoors people to search for hiking and camping spots in their area. Hikers are able to add in new hikes for others to enjoy and comment on others' submissions."
          techStack={[
            "JavaScript",
            "MongoDB",
            "Express",
            "React.js",
            "Node.js",
            "Flexbox",
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
