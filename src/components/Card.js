import '../styles/Card.css'


const Card=(props)=>{
return(
    
    <div className="card">
        <div className="card-border-top">
        </div>
        
            <img src={props.memberimg} alt={props.imgalt}/>
        
        <span> {props.member}</span>
        <p className="job">{props.memberrole}</p>
        

      </div>
)
}

export default Card