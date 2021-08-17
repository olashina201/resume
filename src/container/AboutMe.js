import React from "react";
import { FaUserAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div class="boxArea about">
      <div class="title">
        <span>
          <em>
            <FaUserAlt />
          </em>
        </span>
        <h3>About Me</h3>
      </div>
      <div class="contentArea">
        <p>
          I am a web developer with a good foundation in frontend design
          technologies (HTML, CSS & JAVASCRIPT). I'm passionate about new
          technology and always willing to learn. Growth is inevitable, which is
          why I am willing to have work experience so as to develop other skills
          that will contribute immensely to my growth.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
