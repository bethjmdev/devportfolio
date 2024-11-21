import React from "react";
import "./Projects.css";
import ProjectContainer from "../components/utils/projects/ProjectContainer";

function Experience() {
  return (
    <div id="Experience" className="experience">
      <div className="experience-container">
        <div className="title">
          <h2>Experience</h2>

          <hr id="hr" />
        </div>
        <ProjectContainer
          website={"https://www.hombaez.com/"}
          linkedIn={
            "https://www.linkedin.com/company/hombaez/posts/?feedView=all"
          }
          direction="row-reverse"
          HeaderText={"HomHub at Hombaez"}
          Description={
            "Hōmbaez is a real estate platform that enables lenders to purchase exclusive zip codes for advertising, connecting them with homebuyers. I implemented features like real-time messaging, deal tracking, secure document upload, zip code purchasing for advertisement, and profile management. The platform is optimized for performance, with 64.3MB memory usage and a 798 ms API response time."
          }
          dates={"Full Stack Developer | July 2024 - Present"}
          TechText={
            "React.js, Firebase, AWS, Twilio, SendGrid, Google Cloud Functions, Google Maps API, CSS, RESTful Routes"
          }
        />
        <ProjectContainer
          website={"https://www.hombaez.com/"}
          direction="row-reverse"
          linkedIn={
            "https://www.linkedin.com/company/hombaez/posts/?feedView=all"
          }
          HeaderText={"Hombaez Mobile App"}
          dates={"Mobile Developer | July 2024 - Present"}
          Description={
            "I built key features for Hōmbaez, a real estate platform connecting buyers and lenders. This includes Hōmbaez's loan pre-approval document upload with an intuitive interface, achieving 3 MB/s upload speeds, and a real-time messaging feature using scalable Firebase architecture, supporting 200 users with under 100ms latency."
          }
          TechText={"Flutter, Dart, AWS, Firebase, UX Design"}
        />
        <ProjectContainer
          website={"https://waggyadoptquiz.netlify.app/"}
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
