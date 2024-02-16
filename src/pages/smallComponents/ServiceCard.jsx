import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="icon">{service.icon}</div>
      <div>
        <h1>{service.title}</h1>
        <p>{service.subTitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
