import React from "react";
import "../assets/style.css";
import me from "../assets/me.png";
import AboutMe from "./AboutMe";
import Address from "./Address";
import Education from "./Education";
import Social from "./Social";

const SideBar = () => {
  return (
    <div class="side_left">
      <div class="profile">
        <img src={me} class="img-fluid" alt="Vishal Sondarva" />
      </div>

      <div class="profile_name">
        <h1>
          <strong>Vishal</strong> Sondarva
        </h1>
        <h2>Web Designer</h2>
      </div>
      <AboutMe />
      <Address />
      <Education />
      <Social />
    </div>
  );
};

export default SideBar;
