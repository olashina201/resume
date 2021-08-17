import React from "react";
import "../assets/style.css";
import me from "../assets/me.png";
import { FaPhoneVolume } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import AboutMe from "./AboutMe";

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

      <div class="boxArea contact">
        <div class="title">
          <span>
            <em>
              <IoMdContact />
            </em>
          </span>
          <h3>Contact Me</h3>
        </div>
        <div class="contentArea">
          <div class="contact-list">
            <span>
              <em>
                <FaPhoneVolume />
              </em>
            </span>
            <h3>
              <a href="#">+91 9624805595</a>
            </h3>
          </div>
          <div class="contact-list">
            <span>
              <em>
                <BiMailSend />
              </em>
            </span>
            <h3>
              <a href="#">sondarvavishal@gmail.com</a>
            </h3>
          </div>
          <div class="contact-list">
            <span>
              <em>
                <GoLocation />
              </em>
            </span>
            <h3>Abc******, Zip-15**055</h3>
          </div>
        </div>
      </div>

      <div class="boxArea education">
        <div class="title">
        <span><em><FaBookOpen /></em></span>
          <h3>Education</h3>
        </div>
        <div class="contentArea">
          <div class="education_fild">
            <p>2015 - 2018</p>
            <strong>BCA in Computer Science</strong>
            <p>**** University</p>
          </div>

          <div class="education_fild">
            <p>2013 - 2015</p>
            <strong>HSC in Commerce</strong>
            <p>**** State Board</p>
          </div>

          <div class="education_fild">
            <p>2012 - 2013</p>
            <strong>SSC in design</strong>
            <p>***** State Board</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
