import React from "react";
import "../../components/clinics-components/clinic2/Styles_C2.css"

function IntroSection (props) {
  return (
    <div className="intro-section">
      <h1 className="intro-title">{props.title}</h1>
      <p className="intro-subtitle">{props.subtitle1} <br/>
      {props.subtitle2} <span className="intro-highlight">{props.specific1}</span> {props.specific3}
      </p>
      <p className="intro-subtitle">
      {props.subtitle4} <span className="intro-highlight">{props.specific2}</span> {props.subtitle5}
  </p>
  <p className="intro-subtitle">
   {props.subtitle6}
  </p>
    </div>
  )
};
export default IntroSection;