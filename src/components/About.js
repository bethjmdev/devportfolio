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
            {/* <br /> */}
            <p>
              I’m a full-stack developer at Hōmbaez, a fintech and proptech
              company, where I build their B2B web app and B2C mobile app. My
              work focuses on creating tools that help home buyers represent
              themselves and save money in the process.
            </p>
            <br />
            <p>
              I’m the kind of person who dives into big challenges, even when I
              don’t have all the skills at first. I trust myself to figure it
              out, learn what’s needed, and make it happen along the way. I
              thrive in environments where the team is eager to learn and grow
              together—I truly believe that a rising tide lifts all ships.{" "}
            </p>
            <br />

            <p>
              I’m a big believer in clear and open communication—if anything,
              I’d rather over-communicate than leave things unclear. I also
              really value kind, actionable feedback, as it helps me grow and
              become the engineer I want to be.
            </p>
            <br />

            <p>
              Right now, I’m looking for a remote position while I explore the
              United States with my cats, boyfriend, and everything we can fit
              in the back of our RAV4. We’ve spent the last three months in
              Northern California and are off to Arizona next. Feel free to ask
              me about our other stops! When I’m not coding, you can find me
              obsessing over specialty coffee, whipping up comfort meals that’ll
              put you into a food coma, or hiking to the top of mountain peaks.
            </p>
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
