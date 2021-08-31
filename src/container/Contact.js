import React, { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/style.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const success = () => toast("email sent successfully");
  const fail = () => toast("email not sent");

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      "service_a2kykd8",
      "template_j2akhas",
      data,
      "user_KqkLGdwS0S4Glfla1t0Wh"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        success();
        setData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        fail();
        setData({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <textarea
        name="message"
        value={data.message}
        onChange={handleChange}
        rows="6"
        cols="30"
      ></textarea>
      <div className="button">
        <button type="submit">Submit</button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Contact;
