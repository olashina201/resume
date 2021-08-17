import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoMdContact } from "react-icons/io";

const Address = () => {
  return (
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
            <a href="#">+234 8136156937</a>
          </h3>
        </div>
        <div class="contact-list">
          <span>
            <em>
              <BiMailSend />
            </em>
          </span>
          <h3>
            <a href="#">olashina201@gmail.com</a>
          </h3>
        </div>
        <div class="contact-list">
          <span>
            <em>
              <GoLocation />
            </em>
          </span>
          <h3>Lagos, Nigeria</h3>
        </div>
      </div>
    </div>
  );
};

export default Address;
