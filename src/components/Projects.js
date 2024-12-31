import React from "react";
import "./Projects.css";
import ProjectContainer from "../components/utils/projects/ProjectContainer";

import DMDock from "../images/DMDockVideo.png";
import LostWoods from "../images/LostWoodsVideo.png";
import BrewMap from "../images/BrewMap.png";
import BrewReview from "../images/brew_map_review.png";

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
          // loom={"youtube.com"}
          website={"https://brewmap-81a41.web.app/"}
          image={BrewReview}
          direction="row"
          HeaderText={"BrewMap"}
          Description={`BrewMap connects coffee lovers with detailed, insightful reviews of coffee shops, spotlighting roast profiles, drink styles, and origins. Discover shops through an interactive map, add reviews, and share bean details. Gamify your experience with badges like "Top Reviewer" and "Caffeine Pioneer." Follow friends to explore the shops they’re reviewing and adding, making coffee discovery more engaging and fun!`}
          TechText={
            "React.js, Firebase, Firebase Auth, Google Maps API, RESTful Routes, Google Cloud Functions, CSS, node-fetch"
          }
        />
        <ProjectContainer
          gitHub={"https://github.com/bethjm/dmdock-front-end "}
          loom={"https://www.loom.com/share/79a18aa78f994443b3b9c99917aa87a3"}
          direction="row"
          image={DMDock}
          playVideo={true}
          HeaderText={"DM Dock"}
          Description={
            "An online app for D&D Game Masters to easily access campaign details during gameplay. This allows them to research new monsters and save them to favorites. They are also able to save data about their players to easily access and change during gameplay."
          }
          TechText={
            "Teck Includes: Python, Django, PostgreSQL, JWT, React.js, JavaScript, React Router, Bulma.io"
          }
        />
        {/* <ProjectContainer
          gitHub={"https://github.com/Brett-Abramson/Lost_in_the_Woods "}
          loom={"https://www.loom.com/share/4a9cb9ff498d404d8b9e682739e0b3ee "}
          website={""}
          direction="row"
          image={LostWoods}
          playVideo={true}
          HeaderText={"Lost In The Woods"}
          Description={
            "Lost In The Woods is an app for outdoors people to search for hiking and camping spots in their area. Hikers are able to add new hikes for others to enjoy and comment on others' submissions."
          }
          TechText={"JavaScript, MongoDB, Express, React.js, Node.js, Flexbox"}
        /> */}
      </div>
    </div>
  );
}

export default Projects;
