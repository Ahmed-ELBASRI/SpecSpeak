import React from "react";
import "./serviceCard.css"
import { Link } from "react-router-dom";
const ServiceCard = ({delay, icon, desc, title}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-offset="0"
      data-aos-duration="1000"
    >
      <div className="single_service">
        <div className="ss_icon">
          <span>{icon}</span>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
