import React from "react";
import banner from "../../assets/banner/picture.png";
import "../css/banner.css";
import "../css/sidebar.css";
import SideNavbar from "../smallComponents/SideNavbar";

const Banner = () => {
  return (
    <div className="banner-container">
      <SideNavbar />
      <div className="banner">
        <div className="banner-text-container">
          <p>
            Up to <span>70%</span> of on Black Friday
          </p>
          <h1>
            TRENDY <span>FASHION</span> <br /> COLLECTION
          </h1>
          <button type="button">Buy Now</button>
        </div>
        <div className="banner-img">
          <img src={banner} alt="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
