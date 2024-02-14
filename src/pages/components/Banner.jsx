import React from "react";
import SideNavbar from "../smallComponents/SideNavbar";
import "../css/sidebar.css";
import "../css/banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <SideNavbar />
      <div className="banner"></div>
    </div>
  );
};

export default Banner;
