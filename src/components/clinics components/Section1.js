import Clinic3 from "./Clinic3";
import Section1 from "./Section1";



const Section1 = (props) => {
    return ( 
      <section className="para&title">
      <h1 className="title"> {props.title}</h1>
      <p className="para">{props.para}</p>
      </section>
     <Clinic3/> 
  );
};






  
  export default Section1;
  