import React from "react";
import './BenefitsSection.css';

const BenefitsSection = () => {
  return (
    <section id="benefits-section">
  <h2>Benefits of Physical Therapy</h2>
  <div className="benefits-container">
    <div className="benefit-item">
      <img src="images/b1.jpg" alt="Injury Prevention" />
      <h5>Injury Prevention</h5>
      <p>Physical therapy helps identify and address weaknesses to prevent future injuries.</p>
    </div>
    <div className="benefit-item">
      <img src="images/b2.jpg" alt="Pain Management" />
      <h5>Pain Management</h5>
      <p>Effective techniques to manage chronic pain without reliance on medication.</p>
    </div>
    <div className="benefit-item">
      <img src="images/b3.jpg" alt="Enhanced Mobility" />
      <h5>Enhanced Mobility</h5>
      <p>Improved range of motion and overall physical functionality.</p>
    </div>
    <div className="benefit-item">
      <img src="images/b4.jpg" alt="Post-Surgery Recovery" />
      <h5>Post-Surgery Recovery</h5>
      <p>Assists in faster recovery and rehabilitation after surgical procedures.</p>
    </div>
    <div className="benefit-item">
      <img src="images/b5.jpg" alt="Improved Sports Performance" />
      <h5>Improved Sports Performance</h5>
      <p>Helps athletes enhance performance and reduce the risk of sports-related injuries.</p>
    </div>
    <div className="benefit-item">
      <img src="images/b6.jpg" alt="Balance and Stability" />
      <h5>Balance and Stability</h5>
      <p>Improves coordination and reduces the risk of falls, especially in older adults.</p>
    </div>
  </div>
</section>

  );
};

export default BenefitsSection;
