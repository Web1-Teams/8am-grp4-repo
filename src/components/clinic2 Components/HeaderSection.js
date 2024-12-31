import React from "react";

const HeaderSection = ({ title, subtitle }) => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="header-section">
          <div className="header">
            <div className="header-content">
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;