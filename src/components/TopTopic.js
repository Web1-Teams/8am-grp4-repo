import '../styles/toptopic.css'



const TopTopic=(props)=>{
    return(
<div>
<h2>{props.clinic1}</h2>
<div className="card1">
    <p><span>{props.topic1}</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>

</div>
</div>
    )
}

export default TopTopic