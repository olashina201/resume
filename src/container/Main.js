import React from "react";
import "../assets/style.css";
import Contact from "./Contact";
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
        <h3>Contact</h3>
        <Contact />
      </div>
    </div>
  );
};

export default Main;
