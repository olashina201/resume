import React, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../assets/style.css";
import SideBar from "./SideBar";
import Main from "./Main";

const Index = () => {
  const notify = () => toast("Sikiru Quadri Olashina");

  useEffect(() => {
    notify()
  }, [])
  return (
    <div className="main">
      <SideBar />
      <Main />
      <ToastContainer />
    </div>
  );
};

export default Index;
