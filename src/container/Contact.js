import React from "react";
import "../assets/style.css";

const Contact = () => {
  return (
    <form action="#">
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />
        <textarea rows="6" cols="30"></textarea>
      <div className="button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Contact;
