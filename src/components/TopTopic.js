import '../styles/toptopic.css'



const TopTopic=(props)=>{
    return(
<div>
<h2>Hot Topic</h2>
<div className="card1">
    <p><span>{props.topic1}</span></p>
    <p><span>{props.topic2}</span></p>
    <p><span>{props.topic3}</span></p>
    <p><span>{props.topic4}</span></p>
    <p><span>{props.topic5}</span></p>


</div>
</div>
    )
}

export default TopTopic