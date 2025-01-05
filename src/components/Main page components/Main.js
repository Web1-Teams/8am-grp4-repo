import './styles_main ar.css'
import Review from "../Review/Review"
import Main_about from '../main_about/Main_about';
import Header from '../header/Header';


const Main=()=>{
    return (
        <>
        <Header ClinicName="VITAL CARE"  className="page8Background"  
        option1="Header"
        option2="About"
        option3="Review"
        ClinicAyah="Welcome to Vital Care  Health Center, where your health and well-being are our top priority. We provide comprehensive medical services with the highest standards of quality, delivered by a team of experienced doctors and specialists.
         Our goal is to ensure holistic care tailored to your needs in a modern and comfortable environment. Your health matters to us!"
        />

        <Main_about/>
        <Review/>
     
</>
    )
}


export default Main;