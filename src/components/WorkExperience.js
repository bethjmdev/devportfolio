import React from "react";
import WorkCard from "./WorkExpereince/WorkCard";

import "./WorkExperience.css";

import bodywork from "./images/bodywork.png";
import waggy from "./images/waggyapp.png";

const WorkExpereince = () => {
  return (
    <div className="workexpmain">
      <div className="title">
        <h2>Work Experience</h2>
        <span className="line"></span>
      </div>
      <div className="container">
        <WorkCard
          title="Bodywork By Steph"
          image={bodywork}
          position="Front End Developer"
          date="June 2023 - August 2023"
          githubLink="https://github.com/bethjm/stephmassage"
          description="In close collaboration with the client and the UX designer, a mobile-first approach was employed to align the website's visual design with the brand identity and effectively communicate the client's distinctive offerings. The development process utilized React.js and React Router, leveraging reusable components to enhance code maintainability and scalability. Additionally, two custom APIs were created to seamlessly integrate dynamic content into the website's framework."
          skills={[
            "React.js",
            "JavaScript",
            "React Router",
            "Custom API",
            "Mobile First",
            "Reusable Carousel",
            "Reusable Accordion",
            "CSS",
            "UX Design Collaboration",
          ]}
          webLink="https://bodyworkbystephanie.netlify.app/"
        />

        <WorkCard
          title="WaggyTail Animal Rescue"
          image={waggy}
          position="Freelance iOS and Android App Developer"
          date="Sept 2023 - Current"
          githubLink="https://github.com/bethjm/WaggyTailsApp"
          description="Utilized Agile Project Management to collaborate with designers and pet experts to educate potential adopters about cat and dog care with interactive quizzes, promoting responsible pet ownership
        In process of deploying the mobile app to app stores like Apple App Store and Google Play Store"
          skills={[
            "React Native",
            "Quiz Algorithm",
            "Andriod Studio",
            "xCode Studio",
            "Reusable Quiz Component",
            "StyleSheets",
            "JavaScript",
            "React Navigation",
            "React Hooks",
          ]}
          webLink={null}
        />
      </div>
    </div>
  );
};

export default WorkExpereince;
