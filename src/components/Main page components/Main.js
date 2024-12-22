import NavBar from "../navbar/Navbar"
import './styles_main ar.css'
import TopTopic from "../TopTopic"
import Footer from "../Footer"
import Review from "../Review"
import DoctorSection1 from "../DoctorSection1"
const Main=()=>{
    return (
        <>
        <NavBar/>
        <TopTopic topic1="Welcome" clinic1="Main"/>
        <DoctorSection1/>
        <Review/>
        <Footer/>
        </>
    )
}


export default Main