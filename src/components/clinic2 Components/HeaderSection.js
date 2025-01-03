import React from "react";

const HeaderSection = (props) => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="header-section">
          <div className="header">
            <div className="header-content">
              <h1>{props.title}</h1>
              <h2>{props.subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;