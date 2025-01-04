import React from "react";
import "../clinics-components/clinic2/Styles_C2.css";
import { Link } from "react-router-dom";

function ServiceCard (props) {
    return (
        <Link to= {props.service} className="service-card" style={{  backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${props.serImage})`}}>
        <h4>{props.serviceName}</h4>
        <p>{props.intro}</p>
    </Link>
    )
}
export default ServiceCard;