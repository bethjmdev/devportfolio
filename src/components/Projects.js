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
          gitHub={"https://github.com/bethjmdev/brew_map"}
          loom={"youtube.com"}
          website={"youtube.com"}
          direction={"row"}
          HeaderText={"BrewMap"}
          Description={
            "Created a map-based coffee shop search and review platform, leveraging Google Maps API and Firebase to help coffee enthusiasts discover shops tailored to their roast and flavor preferences. Integrated gamification features like 'Top Reviewer' and 'Caffeine Pioneer' badges to enhance user engagement. Built a custom web scraper to keep coffee shop bios and bean selections on BrewMap updated weekly, delivering accurate and fresh content to users."
          }
          TechText={
            "React.js, Firebase, Google Maps API, Cheerio, Axiom, RESTful Routes, Google Cloud Functions, CSS"
          }
        />
        <ProjectContainer
          gitHub={"https://github.com/bethjm/dmdock-front-end "}
          loom={"https://www.loom.com/share/79a18aa78f994443b3b9c99917aa87a3"}
          direction={"row"}
          HeaderText={"DM Dock"}
          Description={
            "An online app for D&D Game Masters to easily access campaign details during gameplay. This allows them to research new monsters and save them to favorites. They are also able to save data about their players to easily access and change during gameplay."
          }
          TechText={
            "Teck Includes: Python, Django, PostgreSQL, JWT, React.js, JavaScript, React Router, Bulma.io"
          }
        />
        <ProjectContainer
          gitHub={"https://github.com/Brett-Abramson/Lost_in_the_Woods "}
          loom={"https://www.loom.com/share/4a9cb9ff498d404d8b9e682739e0b3ee "}
          website={""}
          direction={"row"}
          HeaderText={"Lost In The Woods"}
          Description={
            "Lost In The Woods is an app for outdoors people to search for hiking and camping spots in their area. Hikers are able to add new hikes for others to enjoy and comment on others' submissions."
          }
          TechText={"JavaScript, MongoDB, Express, React.js, Node.js, Flexbox"}
        />
      </div>
    </div>
  );
}

export default Projects;
