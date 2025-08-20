import React from "react";
import "./Projects.css";
import ProjectContainer from "../components/utils/projects/ProjectContainer";

import Homhub from "../images/HomHub.png";
import HomApp from "../images/HApp.png";
import Waggy from "../images/WaggyApp.png";
import YorAI from "../images/yor_ai_logo.png";

function Experience() {
  return (
    <div id="Experience" className="experience">
      <div className="experience-container">
        <div className="title">
          <h2>Experience</h2>

          <hr id="hr" />
        </div>
        <ProjectContainer
          website={"https://www.theyor.com/"}
          image={YorAI}
          linkedIn={
            "https://www.linkedin.com/company/yor-ai/about/"
          }
          direction="row-reverse"
          HeaderText={"AI Platforms at YOR.AI"}
          Description={
          "YOR.AI creates custom and private AI agents and user interfaces for companies to streamline operations. Our AI agents can be local, cloud based, or hybrid. We have a strong focus on compliance and privacy. As the Core Developer, I build user interfaces for various companies utilizing our platforms and make the UI tailored to the individual needs of the organization. I work with the founders of my company to communicate with the clients and understand their needs so we can realisticallybring their expecations to life."          }
          dates={"Full Stack Developer | March 2024 - Current"}
          TechText={
            "React.js, Vite, RESTful Routes, Electron, reusable components, JWT Tokens, Node.js, CSS3"
          }
        />
        <ProjectContainer
          website={"https://www.theyor.com/"}
          image={Homhub}
          linkedIn={
            "https://www.linkedin.com/company/hombaez/posts/?feedView=all"
          }
          direction="row-reverse"
          HeaderText={"HomHub at YOR.AI (previosuly Hombaez)"}
          Description={
            "Hōmbaez is a real estate platform that enables lenders to purchase exclusive zip codes for advertising, connecting them with homebuyers. I implemented features like real-time messaging, deal tracking, secure document upload, zip code purchasing for advertisement, and profile management. The platform is optimized for performance, with 64.3MB memory usage and a 798 ms API response time."
          }
          dates={"Full Stack Developer | March 2024 - Jan 2025"}
          TechText={
            "React.js, Firebase, AWS, Twilio, SendGrid, Google Cloud Functions, Google Maps API, CSS, RESTful Routes"
          }
        />
        <ProjectContainer
          website={"https://www.theyor.com/"}
          image={HomApp}
          direction="row-reverse"
          linkedIn={
            "https://www.linkedin.com/company/hombaez/posts/?feedView=all"
          }
          HeaderText={"Hombaez Mobile App at YOR.AI (previosuly Hombaez)"}
          dates={"Mobile Developer | July 2024 - Dec 2024"}
          Description={
            "I built key features for Hōmbaez, a real estate platform connecting buyers and lenders. This includes Hōmbaez's loan pre-approval document upload with an intuitive interface, achieving 3 MB/s upload speeds, and a real-time messaging feature using scalable Firebase architecture, supporting 200 users with under 100ms latency."
          }
          TechText={"Flutter, Dart, AWS, Firebase, UX Design"}
        />
        <ProjectContainer
          website={"https://waggyadoptquiz.netlify.app/"}
          image={Waggy}
          gitHub={"https://github.com/bethjm/WaggyTailsApp "}
          direction="row-reverse"
          HeaderText={"WaggyTail Animal Rescue"}
          dates={"Freelance Mobile Developer | Sept 2023 - January 2024"}
          Description={
            "Collaborated with designers and pet experts to develop an interactive product that educates potential adopters on cat and dog care through engaging quizzes. The initiative aims to ensure pets are placed in safe homes, promote responsible ownership, and improve pet retention rates."
          }
          TechText={
            "React Native, Quiz Algorithm, Android Studio, Xcode Studio, StyleSheets, JavaScript"
          }
        />
      </div>
    </div>
  );
}

export default Experience;
