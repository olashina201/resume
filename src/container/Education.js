import React from "react";
import { FaBookOpen } from "react-icons/fa";

const Education = () => {
  return (
    <div class="boxArea education">
      <div class="title">
        <span>
          <em>
            <FaBookOpen />
          </em>
        </span>
        <h3>Education</h3>
      </div>
      <div class="contentArea">
        <div class="education_fild">
          <p>2019 - 2023</p>
          <strong>BSC in Computer Science</strong>
          <p>Lagos State University</p>
        </div>

        <div class="education_fild">
          <p>2009 - 2015</p>
          <strong>Secondary School Certificate</strong>
          <p>Araromi Ilogbo Sec. Sch.</p>
        </div>

        <div class="education_fild">
          <p>2008</p>
          <strong>First School Certificate</strong>
          <p>Olumuyiwa Nur/Pry School</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
