import NavBar from "../NavBar"
import './styles_main ar.css'
import TopTopic from "../TopTopic"
import Footer from "../Footer"
import Review from "../Review"
import RatingCard from "../RatingCard"

const Main=()=>{
    return (
        <>
        <NavBar/>
        <TopTopic topic1="Welcome" clinic1="Main"/>
        <RatingCard/>
        <Review/>
        <Footer/>
        </>
    )
}


export default Main