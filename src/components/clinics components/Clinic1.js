import NavBar from '../NavBar'
import TopTopic from '../TopTopic'
import '../../styles/Styles_C1 en.css'
import Review from '../Review'
import Footer from '../Footer'

const Clinic1=()=>{
   return(
    <>
     <NavBar />
     <TopTopic topic1="Welcome" clinic1="Clinic1"/>
     <div> 
          <Header
           ClinicName="Mental Health Clinic"
           ClinicAyah="{Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.}"
           className="page1Background"
           />
        </div>
     <Review/>
     <Footer />
     </>
   )
}


export default Clinic1