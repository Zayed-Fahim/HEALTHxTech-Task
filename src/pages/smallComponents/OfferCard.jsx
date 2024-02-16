import React from "react";
import { Link } from "react-router-dom";

const OfferCard = ({ offerCard }) => {
  return (
    <div
      className="offer-container"
      style={{ backgroundColor: `${offerCard.backgroundColor}` }}
    >
      <div
        className="top-circle"
        style={{ border: `20px solid ${offerCard.borderColor}` }}
      />
      <div
        className="bottom-circle"
        style={{ backgroundColor: `${offerCard.borderColor}` }}
      />
      <div className="container">
        <div className="container-left">
          <p className="container-title">{offerCard.title}</p>
          <h1 className="container-offer">{offerCard.offer}</h1>
          <div className="link-container">
            <span className="container-icon">
              {offerCard.icon ? offerCard.icon : null}
            </span>
            <Link to="" className="container-link">
              {offerCard.buttonText}
            </Link>
          </div>
        </div>
        <img className="img-container" src={offerCard.image} alt="" />
      </div>
    </div>
  );
};

export default OfferCard;
