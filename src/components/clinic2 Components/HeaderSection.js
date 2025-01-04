import React from "react";
import "../clinics-components/clinic2/Styles_C2.css"
import MiniNav from "../MiniNavBar/MiniNavbar";

const HeaderSection = (props) => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="header-section">
          <div className="header"> <MiniNav clinicName = "Self Care"
          link1 = "#Our-Services"
          option1 = "Our Services"
          link2 = "#Tips"
          option2 = "Tips Of Bueaty"
          link3 = "#books-info"
          option3 = "Books"
          link4 = "#testimonials"
          option4 = "Visitor Reviews"
           />
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