import React from "react";
import "../assets/contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Lagos, Nigeria</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+234 8136156937</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">olashina201@gmail.com</div>
          </div>
          <div>
            <ul className="list-inline social-links">
              <li>
                <a
                  href="https://github.com/olashina201"
                  className="btn-social btn-outline"
                >
                  <i className="icon ion-social-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/#"
                  className="btn-social btn-outline"
                  title="Twitter"
                >
                  <i className="icon ion-social-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://ph.linkedin.com/in/#"
                  className="btn-social btn-outline"
                  title="LinkedIn"
                >
                  <i className="icon ion-social-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/#"
                  className="btn-social btn-outline"
                  title="Instagram"
                >
                  <i className="ion ion-social-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="btn-social btn-outline" title="Facebook">
                  <i className="ion ion-social-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send a message</div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-text">
              <textarea name="comment" rows="12" cols="120"></textarea>
            </div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
