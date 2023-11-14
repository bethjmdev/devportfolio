import React from "react";

import ClipboardCopy from "./CopyFeature/ClipboardCopy";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h3>Contact Information</h3>
        <span className="line"></span>
        <p>Email:</p>
        <ClipboardCopy copyText="bethjmdev@gmail.com" />

        <div className="clickable-links">
          <div className="individual-link">
            <a href="https://www.linkedin.com/in/bethmillsdev/">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linkedin/linkedin-original.svg" />
              <h4>LinkedIn</h4>
            </a>
          </div>

          <div className="individual-link">
            <a href="https://github.com/bethjm">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/github/github-original.svg"
                href="https://github.com/bethjm"
              />
              <h4>GitHub</h4>
            </a>
          </div>

          <div className="individual-link">
            <a href="https://docs.google.com/document/d/1SJ3WMdccEwwg8AqQ0RmXuUAr5-CEZ7up8gNjkXu7N5Y/edit">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <path d="M30.13 51.31h20a1.75 1.75 0 0 0 1.75-1.75v-5.12a11.067 11.067 0 0 0-4.4-8.832 9.977 9.977 0 1 0-14.713 0 11.08 11.08 0 0 0-4.387 8.832v5.12a1.75 1.75 0 0 0 1.75 1.75zm10-28.894a6.477 6.477 0 1 1-6.477 6.477 6.485 6.485 0 0 1 6.473-6.476zM31.88 44.44a7.576 7.576 0 0 1 3.87-6.594 9.857 9.857 0 0 0 8.754 0 7.56 7.56 0 0 1 3.876 6.594v3.37h-16.5z" />
                <path d="M112.654 4.75H15.346A1.75 1.75 0 0 0 13.6 6.5v115a1.75 1.75 0 0 0 1.75 1.75h97.308a1.75 1.75 0 0 0 1.75-1.75V6.5a1.75 1.75 0 0 0-1.754-1.75zm-1.75 115H17.1V8.25h93.8z" />
                <path d="M26.346 65.75h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 80.194h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 109.083h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 94.639h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM64 22.417h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 36.861h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 51.306h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5z" />
              </svg>
              <h4>Resume</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
