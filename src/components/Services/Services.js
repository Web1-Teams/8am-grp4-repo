import React from "react";
import "./Services.css"
const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card p-3">
        <img
          src={imgSrc}
          className="card-img-top rounded-circle mx-auto"
          style={{ width: "100px", height: "100px" }}
          alt="Service"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Orthopedic Therapy",
    description: "Specialized care for injuries and conditions related to bones, joints, and muscles.",
    imgSrc: "https://via.placeholder.com/200",
  },
  {
    title: "Sports Rehabilitation",
    description: "Helping athletes recover and prevent sports-related injuries.",
    imgSrc: "https://via.placeholder.com/200",
  },
  {
    title: "Neurological Therapy",
    description: "Support for conditions like stroke, Parkinson's, and spinal cord injuries.",
    imgSrc: "https://via.placeholder.com/200",
  },
  {
    title: "Pediatric Therapy",
    description: "Helping children improve their physical and motor skills through therapy.",
    imgSrc: "https://via.placeholder.com/200",
  },
  {
    title: "Geriatric Therapy",
    description: "Specialized care to improve mobility and quality of life for older adults.",
    imgSrc: "https://via.placeholder.com/200",
  },
  {
    title: "Cardiopulmonary Therapy",
    description: "Therapies to improve heart and lung function and overall stamina.",
    imgSrc: "https://via.placeholder.com/200",
  },
];

const Services = () => {
  return (
    <section id="services" className="mb-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row text-center">
        {services.map((service, index) => (
          <Card
            key={index}
            imgSrc={service.imgSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
export { Card };