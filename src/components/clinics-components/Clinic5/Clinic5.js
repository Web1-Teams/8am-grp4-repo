import Footer from "../../Footer/Footer"
 import Header from "../header/Header"
import Review from "../../Review/Review"
import TopTopic from "../../TopTopics/TopTopic"
import Navbar from "../../navbar/Navbar"



const Clinic5=()=>{
    return(
     <>
      <Navbar/>
      <TopTopic topic1="Welcome" clinic1="Clinic1"/>
      <div> 
            <Header
            ClinicName="Mental Health Clinic"
            ClinicAyah="{Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.}"
            className="page5Background"
            /> 
         </div>
      <Review/>
      <Footer />
      </>
    )
 }
 

 export default Clinic5