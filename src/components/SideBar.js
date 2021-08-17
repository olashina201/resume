import React from "react";
import "../assets/main.css";

const SideBar = () => {
  return (
    <div class="search-type">
      <div class="alert">
        <div class="alert-title">Create Job Alert</div>
        <div class="alert-subtitle">
          Create a job alert now and never miss a job
        </div>
        <input type="text" placeholder="Enter job keyword" />
        <button class="search-buttons">Create Job Alerts</button>
      </div>
    </div>
  );
};

export default SideBar;
