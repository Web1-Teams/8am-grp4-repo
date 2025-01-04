import React from "react";
import './InfoSection.css';
import info from '../../assests/Images/images For C1/PT.png';

const InfoSection = () => {
  return (
    <section id="info-section">
      <h2>Why Choose Physical Therapy?</h2>
      <p>
        Physical therapy provides a comprehensive and patient-centered approach to improving health and recovery. It focuses on addressing the root causes of health issues rather than just masking symptoms. With personalized care, physical therapy aims to enhance mobility, reduce pain, and improve overall well-being for individuals of all ages.
      </p>
      <div className="info-content">
        <img src={info} alt="Why Physical Therapy" />
        <div className="info-details">
          <p>Our highly trained therapists specialize in treating a wide range of conditions, including:</p>
          <ul>
            <li>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1120826/" target="_blank" rel="noopener noreferrer">
                Musculoskeletal disorders
              </a> (e.g., back pain, arthritis, and fractures)
            </li>
            <li>
              <a href="https://www.hopkinsmedicine.org/neurology_neurosurgery/conditions/" target="_blank" rel="noopener noreferrer">
                Neurological conditions
              </a> (e.g., stroke, Parkinson's disease, and multiple sclerosis)
            </li>
            <li>
              Post-surgical recovery (e.g., joint replacements and ACL repairs)
            </li>
            <li>
              <a href="https://www.cdc.gov/chronicdisease/about/index.htm" target="_blank" rel="noopener noreferrer">
                Chronic pain
              </a> management (e.g., fibromyalgia and chronic lower back pain)
            </li>
          </ul>
          <p>
            We utilize advanced techniques and cutting-edge technologies to ensure optimal recovery. These include:
          </p>
          <ul>
            <li>
              <a href="https://www.physio-pedia.com/Manual_Therapy" target="_blank" rel="noopener noreferrer">
                Manual therapy
              </a> for hands-on treatment to improve joint and muscle function
            </li>
            <li>
              Therapeutic exercises tailored to each patient's needs
            </li>
            <li>
              State-of-the-art equipment like electrical stimulation and ultrasound therapy
            </li>
          </ul>
          <p>
            Physical therapy is not just about recovery—it's about empowering individuals to lead healthier, more active lives. Discover the transformative benefits of physical therapy and take the first step toward a healthier you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
