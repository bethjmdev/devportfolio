import React from "react";
import "./About.css";

function About() {
  const skills = [
    "JavaScript",
    "Python",
    "Dart",
    "SQL",
    "HTML",
    "CSS",
    "React.js",
    "React Native",
    "Django",
    "Next.js",
    "Mongoose",
    "Axios",
    "Cheerio",
    "Jest",
    "EJS",
    "Flutter",
    "PostgreSQL",
    "MongoDB",
    "Firebase Firestore",
    "Node",
    "RESTful Routes",
    "JSON Web Token (JWT)",
    "APIs",
    "Google Cloud Functions",
    "Google Cloud Platform (GCP)",
    "AWS",
    "Firebase",
    "Google Maps API",
    "Twilio",
    "SendGrid",
    "GIT",
    "Postman",
    "Agile",
    "Unit Testing",
    "Electron"
  ];

  return (
    <div id="About" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>about me</h2>
          <hr id="hr" />
          <p>Learn about my experience, my character, and my skills.</p>
        </div>
        <br />

        <div className="info">
          <div className="know-me">
            <h4>Get to know me!</h4>
            <p>
              I’m a Core Developer at YOR.AI. My work focuses on creating 
              user interfaces for products that replace manual workflows with private AI agents.
            </p>
            <br />
            <p>
              I’m the kind of person who dives into big challenges, even when I
              don’t have all the skills at first. I trust myself to learn what’s needed and
              find the right people who can help me to get the job done. 
            </p>
            <br />

            <p>I thrive in environments where the team is eager to learn and grow
              together, communication is clear, and feedback is frequent.</p>
              <br />
            <p>
              I recently returned home after a year long road trip across the US. We lived in California, Arizona, and Utah, and Idaho. Ask me about my favorite parts of the trip!
            </p>
            <br />
            <p>I am based out of Manchester, NH and am currently looking for a remote position. I am open to a hyrid position for the right company. I would love to do full stack or front end engineering for a start up or a small company.</p>
         <br/>
         <p>When I’m not coding, you can find me obsessing over specialty coffee, whipping up comfort meals that’ll put you into a food coma, or hiking to the top of mountain peaks.</p>
         </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-icons">
              {skills.map((skill, index) => (
                <p className="icon" key={index}>
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
