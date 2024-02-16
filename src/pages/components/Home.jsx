import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import Services from "./Services";
import "../css/home.css";
import OfferCards from "./OfferCards";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <OfferCards />
      <div className="services-products-container">
        <Services />
        <Products />
      </div>
    </div>
  );
};

export default Home;
