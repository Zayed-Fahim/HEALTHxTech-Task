import React from "react";
import OfferCard from "../smallComponents/OfferCard";
import "../css/offerCards.css";
import { offersData } from "../../data/offersData";

const OfferCards = () => {
  return (
    <div className="offers-container">
      {offersData.map((offerCard, index) => (
        <OfferCard key={index} offerCard={offerCard} />
      ))}
    </div>
  );
};

export default OfferCards;
