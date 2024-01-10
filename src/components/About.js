import React from "react";
import beth from "./images/linkinphoto.jpeg";

import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h2>Hey There 👋🏼</h2>
      <span className="line"></span>
      <div className="container">
        <img src={beth} alt="photo of Beth sitting on a mountain top" />
        <div className="col-2">
          <p>
            <b>
              My combined experience in personal training and software
              engineering has significantly shaped my problem-solving skills and
              approach as a team player and collaborator.
            </b>
          </p>
          <p>
            Integrating biomechanics into my training background sparked a
            passion for using analytical strategies combined with empathetic
            approaches, guiding my transition into software engineering
            seamlessly. Driven by a strong commitment to learning and teamwork,
            I am motivated by a pursuit of excellence and a constant desire for
            knowledge. I am excited to join a team that values these principles,
            eager to contribute my skills towards shared goals while exploring
            innovative paths to success.
          </p>
          <p>
            Collaboration is the foundation of my work ethic. Embracing
            different perspectives while advocating for my ideas has been
            crucial in my previous roles. Thriving in dynamic environments, I've
            always supported a culture that prioritizes collective success. My
            personal training experience has given me essential qualities for
            effective collaboration—such as empathy, adaptability, and a deep
            understanding of individual needs. These traits help me foster
            teamwork and nurture supportive relationships in any group setting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
