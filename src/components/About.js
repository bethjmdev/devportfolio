import React from "react";
import beth from "./images/linkinphoto.jpeg";

import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={beth} alt="photo of Beth sitting on a mountain top" />
        <div className="col-2">
          <p>
            <b>
              My journey is a testament to the potential that lies within each
              one of us when we set our minds to something and wholeheartedly
              pursue our goals.
            </b>
          </p>
          <p>
            As I transition into the field of software engineering, I see it as
            the pivotal moment that will mark the turning point for my family's
            future. Becoming a software engineer is not just a career choice; it
            is my personal mission to make the American dream a reality for
            myself. Armed with a commitment to learning and an unyielding drive
            to create a lasting impact on society, I am ready to embrace the
            challenges that lie ahead.
          </p>
          <p>
            With this endeavor, I am determined to prove that regardless of
            one's background or circumstances, with passion and perseverance, we
            can transcend any obstacle and achieve greatness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
