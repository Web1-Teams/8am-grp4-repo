


const DoctorCard=(props)=>{
    return(

<div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <img src={props.d_img}></img>
            <p className="title">{props.d_name}</p>
            <p className="title">{props.d_specialist}</p>
        </div>
        <div className="flip-card-back">
        <p>Phone number : {props.d_num}</p>
        <p>Email : {props.d_email}</p>

        </div>
    </div>
</div>
    )
}



export default DoctorCard