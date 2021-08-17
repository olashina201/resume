import React from "react";
import manage from "../assets/manage.jpg";
import ip from "../assets/ipt.png";

const Experience = () => {
  return (
    <div class="areaBox experience">
      <h3>Projects</h3>

      <div class="list">
      <img src={ip} />
        <div>
          <strong>Ip Tracker</strong>
          <p><i><b>Develop with:</b></i> React JS</p>
          <a href="https://ip-tracker21.netlify.app/" target="blank"><i><b>website url</b></i></a> and 
          <a href="https://github.com/olashina201/Ip-Tracker" target="blank"><i><b>github repo</b></i></a>
        </div>
      </div>

      <div class="list">
        <img src={manage} />
        <div>
          <strong>Manage Landing Page</strong>
          <p><i><b>Develop with:</b></i> React JS</p>
          <a href="https://react-manage.netlify.app/" target="blank"><i><b>website url</b></i></a> and 
          <a href="https://github.com/olashina201/manage-landing-page" target="blank"><i><b>github repo</b></i></a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
