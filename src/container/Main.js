import React from "react";
import "../assets/style.css"

const Main = () => {
  return (
    <div class="side_Right">
      <div class="profile_name">
        <h1>
          <strong>Sikiru</strong> Quadri
        </h1>
        <h2>Web Developer</h2>
      </div>

      <div class="areaBox experience">
        <h3>Experience</h3>

        <div class="list">
          <strong>Web Developer</strong>
          <p>***abcd*** Pvt LTD - abc******, 123******</p>
          <p>February 2019 - June 2020</p>
        </div>

        <div class="list">
          <strong>Web Developer</strong>
          <p>***abcdef*** Pvt LTD - abc******, 123******</p>
          <p>September 2018 - February 2019</p>
        </div>
      </div>

      <div class="areaBox skill">
        <h3>Professional Skills</h3>

        <div class="list p-90">
          <strong>HTML5</strong>
          <span></span>
        </div>

        <div class="list p-90">
          <strong>CSS3</strong>
          <span></span>
        </div>

        <div class="list p-80">
          <strong>SCSS</strong>
          <span></span>
        </div>

        <div class="list p-80">
          <strong>JavaScript</strong>
          <span></span>
        </div>

        <div class="list p-90">
          <strong>Bootstrap</strong>
          <span></span>
        </div>

        <div class="list p-50">
          <strong>React JS</strong>
          <span></span>
        </div>
      </div>

      <div class="areaBox interests">
        <h3>Interests</h3>

        <div class="box">
          <p>Coding</p>
          <p>Typing</p>
          <p>Gaming</p>
          <p>Traveling</p>
        </div>
      </div>

      <div class="areaBox portfolio">
        <h3>Portfolio</h3>

        <a href="http://vishal.ezyro.com/">www.vishal.ezyro.com/</a>
      </div>
    </div>
  );
};

export default Main;
