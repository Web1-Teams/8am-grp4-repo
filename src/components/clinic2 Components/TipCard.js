import React from "react";
import "../clinics-components/clinic2/Styles_C2.css";
import { Link } from "react-router-dom";



function TipCard(props) {

  return (
    
    <div className="tip-card">
      <Link to = {props.link} target="_blank">
      <div className="icon">{props.icon}</div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      </Link>
    </div>
  );
};

export default TipCard;
