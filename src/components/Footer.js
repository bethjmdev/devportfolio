import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("bethjmdev@gmail.com")
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="upper-box">
          <div className="footer-about">
            <strong>
              <h4>BETH MILLS</h4>
            </strong>
            <p>
              I’m a Full Stack Developer who thrives on challenges,
              collaboration, learning, and creating impactful tools.
            </p>
          </div>
          <div className="footer-socials">
            <h4>SOCIALS</h4>
            <div className="footer-socials-container">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bethjmdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/bethjmdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {/* resume */}
              <a
                href="https://docs.google.com/document/d/1SJ3WMdccEwwg8AqQ0RmXuUAr5-CEZ7up8gNjkXu7N5Y/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFile} />
              </a>
              {/* Email */}
              <a onClick={copyToClipboard} style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="lower-box">
          <p>Made by Beth Mills 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
