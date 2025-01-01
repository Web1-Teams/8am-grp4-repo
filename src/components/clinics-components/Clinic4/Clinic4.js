import Footer from "../../footer/Footer"
import Header from "../../header/Header"
import Navbar from "../../navbar/Navbar"
import Review from "../../review/Review"
import TopTopic from "../../TopTopics/TopTopic"





const Clinic4=()=>{
    return(
     <>
      <Navbar/>
      <TopTopic topic1="Welcome" clinic1="Clinic1"/>
       <div> 
           <Header
            ClinicName="Mental Health Clinic"
            ClinicAyah="{Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.}"
            className="page4Background"
            />
         </div> 
      <Review/>
      <Footer />
      </>
    )
 }
 
 
 export default Clinic4