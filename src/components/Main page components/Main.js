import NavBar from "../NavBar"
import './styles_main ar.css'
import TopTopic from "../TopTopic"
import Footer from "../Footer"

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