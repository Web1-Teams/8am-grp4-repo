import React from "react";

const IntroSection = ({ title, subtitle }) => {
  return (
    <div className="intro-section">
      <h1 className="intro-title">{title}</h1>
      <p className="intro-subtitle">{subtitle}</p>
    </div>
  );
};

export default IntroSection;
