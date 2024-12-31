import React from "react";
function TipCard(props) {
  return (
    <div className="tip-card">
      <div className="icon">{props.icon}</div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default TipCard;
