import { useState } from 'react';  // Import useState for handling state

const Exercise = (props) => {
  const [isOpen, setIsOpen] = useState(false);  // State to control the visibility of exercise details

  const toggleDetails = () => {
    setIsOpen(!isOpen);  // Toggle the visibility of the exercise details
  };

  return (
    <div className="exercise-box">
      <div className="exercise-header" onClick={toggleDetails}>
        {props.exName}
      </div>

      {/* Conditionally render the details section when `isOpen` is true */}
      {isOpen && (
        <div className="exercise-details">
          <ul>
            <li><b>Purpose:</b> {props.purpose}</li>
            <li><b>Steps:</b>
              <ol>
                <li>{props.step1}</li>
                <li>{props.step2}</li>
                <li>{props.step3}</li>
                <li>{props.step4}</li>
                <li>{props.step5}</li>
              </ol>
            </li>
            <li><b>Duration:</b> {props.Duration}</li>
            <li><a href={props.video} target="_blank" rel="noopener noreferrer">Video tutorial</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Exercise;








{/*

const Exercise =(props)=>{
return(
    <section className="MeditationEX">
    <ul>
    <li> <b>{props.exName}  </b> 
    <ul>
          <li><b>Purpose:</b>{props.purpose}</li>
          <li><b>Steps:</b>
            <ol>
              <li>{props.step1}</li>
              <li>{props.step2}</li>
              <li>{props.step3}</li>
              <li>{props.step4}</li>
              <li>{props.step5}</li>
            </ol>
          </li>
          <li><b>Duration:</b> {props.Duration}</li>
          <li> <a href={props.video}>video tutorial </a>  </li>
        </ul>
      </li>
    </ul>
  </section>
)

}

export default Exercise*/}