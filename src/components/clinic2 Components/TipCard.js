import React from "react";
import "../clinics-components/clinic2/Styles_C2.css";
function TipCard(props) {
  return (
    <div className="tip-card">
      <a herf = {props.link} target="_blank">
      <div className="icon">{props.icon}</div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      </a>
    </div>
  );
};

export default TipCard;
