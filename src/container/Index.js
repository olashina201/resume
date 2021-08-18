import React, { useEffect } from "react";
import "../assets/style.css";
import SideBar from "./SideBar";
import Main from "./Main";

const Index = () => {
  useEffect(() => {
    alert("Sikiru Quadri Olashina")
  }, [])
  return (
    <div className="main">
      <SideBar />
      <Main />
    </div>
  );
};

export default Index;
