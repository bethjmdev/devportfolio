import "./Intro.css";
import React from "react";

import screenShot from "./images/videoScreenShot.png";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="content">
        <div className="content-1">
          <h1>Beth Mills</h1>
          <h3>Full Stack Web Developer</h3>
        </div>
        <div className="content-2">
          <a href="https://www.loom.com/share/5293069034964ab19fcfabaf2758ea25">
            <img src={screenShot} alt="video thumbnail" className="photo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
