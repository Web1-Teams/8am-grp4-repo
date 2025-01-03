import './styles_main ar.css'
import TopTopic from "../toptopic/TopTopic"
import Review from "../Review/Review"
import Footer from "../Footer/Footer"

const Main=()=>{
    return (
        <>

        <TopTopic topic1="Welcome" clinic1="Main"/>

        <Review/>
        <Footer/>
</>
    )
}


export default Main