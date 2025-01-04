import React, { useState } from 'react';
import './Review.css';
import pic1 from '../../assests/Images/Main Page Images/4202841.png';
import pic2 from '../../assests/Images/Main Page Images/5231019.png';
import pic3 from '../../assests/Images/Main Page Images/5719511.png';
import pic4 from '../../assests/Images/Main Page Images/6889369.png';
import pic5 from '../../assests/Images/Main Page Images/7084424.png';
import pic6 from '../../assests/Images/Main Page Images/921053.png';

const Review = () => {
  const testimonials = [
    { img: pic1, name: 'Ahmad Hasan', details: 'Media Analyst / SkyNet', text: 'Good job!', rating: 3 },
    { img: pic2, name: 'Reem Numan', details: 'Web Developer / SoftBee', text: 'so useful and full of trusted information ', rating: 4 },
    { img: pic3, name: 'Abdulrahman mohammed', details: 'Web Developer / DevCorp', text: 'very helpful, i loooove it', rating: 5 },
    { img: pic4, name: 'Sedra Fares', details: 'Graphic Designer / MarsMedia', text: 'never been happier with this experience', rating: 4 },
    { img: pic5, name: 'Amir Eid', details: 'SEO Analyst / RealSearch', text: 'this is amazingly amazing!', rating: 4 },
    { img: pic6, name: 'leen Sa3ed', details: 'Web Designer / UniqueDesign', text: 'not bad.', rating: 2 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Show two items per "slide"
  const visibleItems = testimonials.slice(currentIndex, currentIndex + 2);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="reviewh">Customer <b>Testimonials</b></h2>
          <div className="custom-carousel">
            <div className="row">
              {visibleItems.map((testimonial, index) => (
                <div className="col-sm-6" key={index}>
                  <div className="testimonial1">
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="media">
                    <img src={testimonial.img} className="mr-3" alt={testimonial.name} />
                    <div className="media-body">
                      <div className="overview">
                        <div className="name"><b>{testimonial.name}</b></div>
                        <div className="details">{testimonial.details}</div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <li className="list-inline-item" key={i}><i className="fa fa-star"></i></li>
                            ))}
                            {[...Array(5 - testimonial.rating)].map((_, i) => (
                              <li className="list-inline-item" key={i}><i className="fa fa-star-o"></i></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <button
                className="carousel-control-prev"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
              <button
                className="carousel-control-next"
                onClick={handleNext}
                disabled={currentIndex >= testimonials.length - 2}
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
