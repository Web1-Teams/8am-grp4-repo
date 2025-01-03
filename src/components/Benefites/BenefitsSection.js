
import React from "react";
import Benefits from "./Benefits";
import "./BenefitsSection.css"; // Assuming you add CSS here

const BenefitsSection = (props) => {
  return (
    <div className="benefits-section">
      <Benefits
        title="Mental Benefits"
        b1="Reduces stress and anxiety."
        b2="Enhances focus and concentration."
        b3="Boosts creativity and problem-solving skills."
      />
      <Benefits
        title="Physical Benefits"
        b1="Lowers blood pressure and improves heart health."
        b2="Strengthens the immune system."
        b3="Improves sleep quality."
      />
      <Benefits
        title="Emotional Benefits"
        b1="Increases self-awareness and empathy."
        b2="Promotes a sense of gratitude and joy."
        b3="Reduces feelings of loneliness and depression."
      />
    </div>
  );
};

export default BenefitsSection;
