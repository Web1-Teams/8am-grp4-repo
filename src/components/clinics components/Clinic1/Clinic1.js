import '../../styles/Styles_C1 en.css'
import Navbar from "../../navbar/Navbar"
import TopTopic from '../../TopTopics/TopTopic'
import Review from '../../Review/Review'
import Footer from '../../Footer/Footer'
// import Header from '../header/Header'

const Clinic1=()=>{
   return(
    <>
      <Navbar/>
     <TopTopic topic1="Welcome" clinic1="Clinic1"/>
     {/* <div> 
          <Header
           ClinicName="Mental Health Clinic"
           ClinicAyah="{Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.}"
           className="page1Background"
           />
        </div> */}
     <Review/>
     <Footer />
     </>
   )
}


export default Clinic1