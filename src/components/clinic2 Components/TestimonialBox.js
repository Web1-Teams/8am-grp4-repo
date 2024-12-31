import React from "react";

const TestimonialBox = ({ image, name, location, stars, comment }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={index < stars ? "fa fa-star" : "fa fa-star-o"}
      ></i>
    ));
  };

  return (
    <div className="testimonial-box">
      <div className="box-top">
        <div className="profile">
          <div className="profile-img">
            <img src={image} alt={`${name}'s profile`} />
          </div>
          <div className="name-user">
            <strong>{name}</strong>
            <span>{location}</span>
          </div>
        </div>
        <div className="reviews">{renderStars()}</div>
      </div>
      <div className="client-comment">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default TestimonialBox;
