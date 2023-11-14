import React from "react";

import "./Languages.css";

const Languages = () => {
  return (
    <div className="languages" id="languages">
      <div className="box">
        <h3>Languages</h3>
        <span className="line"></span>
        <div className="container">
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/javascript/javascript-original.svg" />
            <p>JavaScript</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-plain.svg" />
            <p>Python</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/css3/css3-original.svg" />
            <p>CSS</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/html5/html5-original.svg" />
            <p>HTML</p>
          </div>
          <div className="grid-item">
            <img
              id="ejs-image"
              src="https://caseyvoss95.github.io/portfolio-site/uploads/widgets/EJS.png"
              alt="ejs"
            />
            <p>EJS</p>
          </div>
        </div>

        <h3>Libraries and Frameworks</h3>
        <span className="line"></span>
        <div className="container">
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/react/react-original.svg" />
            <p>React.js</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nextjs/nextjs-original.svg" />
            <p>Next.js</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nodejs/nodejs-original.svg" />
            <p>Node.js</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/django/django-plain.svg" />
            <p>Django</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/npm/npm-original-wordmark.svg" />
            <p>NPM</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/express/express-original.svg" />
            <p>Express</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/jquery/jquery-original.svg" />
            <p>Jquery</p>
          </div>
          <div className="grid-item">
            <img
              id="json-image"
              src="https://caseyvoss95.github.io/portfolio-site/uploads/widgets/json-icon.svg"
              alt="a json circle"
            />
            <p>Json</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/bootstrap/bootstrap-original.svg" />
            <p>Bootstrap</p>
          </div>
          <div className="grid-item">
            <svg
              id="flexbox-image"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
            >
              <path
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M40 10h50v5.006H40zM40 22.502h30v5.002H40zM40 40.003h20v5.002H40zM40 52.501h40v5.006H40zM40 70.002h30v5.002H40zM40 82.5h50v5.006H40zM10 10h19.999v20.002H10zM10 70.002h19.999V90H10zM10 40.003v19.998h19.999V40.003H10zm15 14.999H14.998V45.001H25v10.001z"
              />
            </svg>
            <p>Flexbox</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/bulma/bulma-plain.svg" />
            <p>Bulma.io</p>
          </div>
        </div>

        <h3>Databases etc</h3>
        <span className="line"></span>
        <div className="container">
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/postgresql/postgresql-original.svg" />
            <p>PostgreSql</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mysql/mysql-original.svg" />
            <p>SQL</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mongodb/mongodb-original.svg" />
            <p>MongoDB</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/git/git-original.svg" />
            <p>Git</p>
          </div>
          <div className="grid-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M57 5H7a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h50a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-1 28H8V7h48z" />
              <path d="M57 1H7a5.006 5.006 0 0 0-5 5v36a5.006 5.006 0 0 0 5 5h17v4H14a1 1 0 0 0-.894.553l-5 10A1 1 0 0 0 9 63h46a1 1 0 0 0 .894-1.447l-5-10A1 1 0 0 0 50 51H40v-4h17a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5zM4 6a3.003 3.003 0 0 1 3-3h50a3.003 3.003 0 0 1 3 3v31H4zm34 46a6.007 6.007 0 0 0 6 6 1 1 0 0 0 0-2 3.996 3.996 0 0 1-3.858-3h9.24l4 8H10.618l4-8h9.24A3.996 3.996 0 0 1 20 56a1 1 0 0 0 0 2 6.007 6.007 0 0 0 6-6v-5h12zm22-10a3.003 3.003 0 0 1-3 3H7a3.003 3.003 0 0 1-3-3v-3h56z" />
              <path d="M7 43h6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zM16 43h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z" />
            </svg>
            <p>RESTful routing</p>
          </div>
          <div className="grid-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path
                class="cls-1"
                d="M38.93 44.1V196h73l1.21-4H42.93V82.91h111.38v60.36l4 2.29V44.1zm4 34.81V48.1h111.38v30.81z"
              />
              <path
                class="cls-1"
                d="M59.32 116.19h80.17v4H59.32zM59.32 96.39h80.17v4H59.32zM59.32 135.69H99.4v4H59.32zM59.06 155.2H86.3v4H59.06zM59.06 174.7h21.25v4H59.06zM144 156.71a18.31 18.31 0 1 0 8.58 11.07 18.28 18.28 0 0 0-8.58-11.07zm3.35 23a14.35 14.35 0 0 1-12.44 7.21 14.32 14.32 0 0 1-12.41-21.4 14.3 14.3 0 0 1 19.5-5.33 14.31 14.31 0 0 1 5.33 19.51z"
              />
              <path
                class="cls-1"
                d="M161.8 188a29.64 29.64 0 0 0 1.39-2.76l11.08-2.86-.57-21.57-11.22-2.27a30.93 30.93 0 0 0-2.12-3.56l3.3-10.94-5.35-3-4-2.29-9.39-5.36-7.75 8.4a30.34 30.34 0 0 0-4.86 0l-7.84-8.32-18.63 10.89 3.42 10.92c-.44.66-.86 1.33-1.25 2a27.22 27.22 0 0 0-1.39 2.75l-11.08 2.86.57 21.57 11.21 2.27a31.28 31.28 0 0 0 2.13 3.56l-.52 1.72-1.2 4-1.57 5.22 18.73 10.7 7.75-8.4a30.33 30.33 0 0 0 4.86 0l7.84 8.32L164 200.89 160.55 190c.45-.68.86-1.35 1.25-2zm-1.91-5.2a27.28 27.28 0 0 1-1.56 3.21 27 27 0 0 1-1.58 2.46l-.59.81 2.09 6.7 1 3.07-13.12 7.68-7-7.45-1 .11a26.85 26.85 0 0 1-6 0l-1-.1-6.94 7.52-13.21-7.54 1-3.33 1.21-4 .74-2.47-.59-.81a26.38 26.38 0 0 1-2.76-4.62l-.43-.91-10-2-.41-15.21 9.92-2.55.38-.93a27.43 27.43 0 0 1 1.56-3.22 28.53 28.53 0 0 1 1.61-2.49l.58-.81-3.06-9.77 13.13-7.68 7 7.45 1-.12a27.27 27.27 0 0 1 6 0l1 .11 6.94-7.53 8.61 4.91 4 2.29.6.34-.6 2-2.41 7.79.6.8a24.08 24.08 0 0 1 1.75 2.71c.36.62.69 1.25 1 1.9l.43.91 10 2 .41 15.2-9.92 2.57zM208.32 139.37c.31-.54.6-1.11.87-1.69l7.88-2-.42-16-8-1.62a21.85 21.85 0 0 0-1.22-2l2.35-7.79-13.86-7.91-5.52 6a21.26 21.26 0 0 0-2.88 0L182 100.4l-13.78 8.06 2.43 7.77c-.25.39-.5.79-.73 1.2s-.6 1.11-.87 1.69l-7.88 2 .42 16 8 1.61a23.23 23.23 0 0 0 1.21 2l-2.34 7.78 13.86 7.92 5.52-6a21.34 21.34 0 0 0 2.88 0l5.58 5.93 13.7-8.03-2.43-7.76c.27-.4.52-.79.75-1.2zm-2.43-4.14a17.27 17.27 0 0 1-1 2.16 17.49 17.49 0 0 1-1.07 1.67l-.59.81 2.07 6.62-8.3 4.85-4.76-5.05-1 .11a18.2 18.2 0 0 1-4 0l-1-.1-4.7 5.09-8.33-4.76 2-6.63-.59-.81a18.15 18.15 0 0 1-1.86-3.11l-.42-.91-6.81-1.37-.25-9.6 6.72-1.73.37-.93a18.8 18.8 0 0 1 1-2.16 18.26 18.26 0 0 1 1.08-1.67l.59-.82-2.04-6.58 8.28-4.85 4.76 5 1-.12a18.09 18.09 0 0 1 4 0l1 .11 4.7-5.1 8.33 4.76-2 6.64.6.8a17.88 17.88 0 0 1 1.85 3.1l.43.91 6.8 1.38.26 9.59-6.72 1.74z"
              />
              <path
                class="cls-1"
                d="M195.71 116.83a13.32 13.32 0 1 0 5 18.18 13.37 13.37 0 0 0-5-18.18zM197.2 133a9.34 9.34 0 1 1-3.48-12.73A9.37 9.37 0 0 1 197.2 133z"
              />
            </svg>
            <p>FULL CRUD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
