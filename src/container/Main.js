import React from "react";
import "../assets/style.css";
import Experience from "./Experience";
import Interest from "./Interest";
import Skills from "./Skills";

const Main = () => {
  return (
    <div class="side_Right">
      <div class="profile_name">
        <h1>
          <strong>Sikiru</strong> Quadri
        </h1>
        <h2>Web Developer</h2>
      </div>

      <Experience />

      <Skills />

      <Interest />

      <div class="areaBox portfolio">
        <h3>Portfolio</h3>

        <a href="http://vishal.ezyro.com/">www.vishal.ezyro.com/</a>
      </div>
    </div>
  );
};

export default Main;
