import React from "react";
import "../assets/contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="content">
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
