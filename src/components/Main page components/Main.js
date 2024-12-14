import NavBar from "../NavBar"
import './styles_main ar.css'
import TopTopic from "../TopTopic"
import Footer from "../Footer"
import DoctorCard from "../DoctorCard"


const Main=()=>{
    return (
        <>
        <NavBar/>
        <TopTopic topic1="Welcome" clinic1="Main"/>
        <Footer/>
        </>
    )
}


export default Main