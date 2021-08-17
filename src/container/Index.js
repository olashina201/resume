import React from "react";
import "../assets/style.css";
import SideBar from "./SideBar";
import Main from "./Main";

const Index = () => {
  return (
    <div className="main">
      <SideBar />
      <Main />
    </div>
  );
};

export default Index;
