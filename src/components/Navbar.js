import React from "react";
import "../assets/main.css";
import me from "../assets/me.png";
import hng from "../assets/HNG.png";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={hng} alt="landing"  />
        Resume
      </div>
      <div className="header-menu">
        <a href="https://zuri.team/" target="blank">
          Zuri Team
        </a>
        <a href="https://training.zuri.team/" target="blank">Zuri Training</a>
        <a href="https://internship.zuri.team/" target="blank">Zuri Internship</a>
      </div>
      <div className="user-settings">
        <div className="user-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-square"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          </svg>
        </div>
        <img className="user-profile" src={me} alt="" />
        <div className="user-name">Olashina Quadri</div>
      </div>
    </div>
  );
};

export default Navbar;
