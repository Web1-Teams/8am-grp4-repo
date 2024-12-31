import React from "react";
import "../../styles/Styles_C2 en.css";

function ServiceCard (props) {
    return (
        <a href= {props.service} className="service-card hover" style={{  backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${props.serImage})`,}}>
        <h4>{props.serviceName}</h4>
        <p>{props.intro}</p>
    </a>
    )
}
export default ServiceCard;