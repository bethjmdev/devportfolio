import React from "react";
import "./Projects.css";
import ProjectContainer from "../components/utils/projects/ProjectContainer";

import DMDock from "../images/DMDockVideo.png";
import LostWoods from "../images/LostWoodsVideo.png";
import BrewMap from "../images/BrewMap.png";
import BrewReview from "../images/brew_map_review.png";
import VitalFormShot from "../images/VitalFormShot.png";

function Projects() {
  return (
    <div id="Projects" className="projects">
      <div className="project-container">
        <div className="title">
          <h2>Projects</h2>

          <hr id="hr" />
        </div>

        <ProjectContainer
          gitHub={"https://github.com/bethjmdev/trueform"}
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
          gitHub={"https://github.com/bethjmdev/brew_map"}
          // loom={"youtube.com"}
          // website={"https://brewmap-81a41.web.app/"}
          image={VitalFormShot}
          direction="row"
          HeaderText={"VitalForm"}
          Description={`Vital Form is a custom-built alternative to TrainHeroic, designed for trainers to create and assign workouts to their clients. Clients can log their workouts, track progress, and monitor weights and reps. Both trainers and clients have access to a history of completed workouts for better performance tracking.`}
          TechText={
            "React.js, Firebase, Firebase Auth, Firestore, CSS, JavaScript"
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
      </div>
    </div>
  );
}

export default Projects;
