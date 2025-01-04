import React from "react";
import ClinicSection from "./ClinicSection";

const Clinics = ({ clinicsData }) => {
  return (
    <div className="clinics-container">
      {clinicsData.map((clinic, index) => (
        <ClinicSection
          key={index}
          name={clinic.name}
          content={clinic.content}
        />
      ))}
    </div>
  );
};

export default Clinics;
