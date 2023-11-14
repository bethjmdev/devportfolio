import "./Intro.css";
import React from "react";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="content">
        <div className="content-1">
          <h1>Beth Mills</h1>
          <h3>Full Stack Web Developer</h3>
        </div>
        <div className="content-2">
          <iframe
            src="https://www.youtube.com/embed/hMgJNbKhi3E"
            title="Youtube Player"
            frameborder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
