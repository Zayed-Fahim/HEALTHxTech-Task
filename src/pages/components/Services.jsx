import React from "react";
import { servicesData } from "../../data/servicesData";
import ServiceCard from "../smallComponents/ServiceCard";
import "../css/services.css";

const Services = () => {
  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default Services;
