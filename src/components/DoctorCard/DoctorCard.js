import './doctorcard.css';
import Dimg from '../../assests/Images/specialists images/Screenshot 2024-12-22 224736.png'
const DoctorCard = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.d_img} alt="doctor" className="doctor-image" />
          <p className="title1">{props.d_name}</p>
          <p className="specialist">{props.d_specialist}</p>
        </div>
        <div className="flip-card-back">
          <p className="contact">Phone number: {props.d_num}</p>
          <p className="contact">Email: {props.d_email}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;