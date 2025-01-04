import DoctorCard from "./DoctorCard"
import './DoctorSection1.css'
import Dimg from '../../assests/Images/specialists images/Screenshot 2024-12-22 224736.png'

const DoctorSection1=(props)=>{
    return(
        <div className="container">
            <DoctorCard d_img={Dimg}
            {...props}/>
            <DoctorCard 
            d_img={Dimg}
           {...props}/>
            <DoctorCard 
            d_img={Dimg}
             {...props}/>
            <DoctorCard 
            d_img={Dimg}
            {...props}/>
            <DoctorCard 
            d_img={Dimg}
            {...props}/>
            <DoctorCard 
            d_img={Dimg}
            {...props}/>
          
        </div>
    );
}

export default DoctorSection1