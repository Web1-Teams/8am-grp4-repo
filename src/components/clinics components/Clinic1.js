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
     <Review/>
     <Footer />
     </>
   )
}


export default Clinic1