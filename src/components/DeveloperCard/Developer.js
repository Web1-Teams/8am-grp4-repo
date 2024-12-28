import React from "react";
import './developer.css';

function Developer (props) {
    return (
        <section className="Developers">
      <h2 style={{ textAlign: "center", color: "#ffffff" }}>Our Team</h2>
      <br />
      <a href={props.cv} target="_blank" rel="noopener noreferrer" className="card">
        <div className="card-border-top"></div>
        <img src={props.image} alt={props.name} />
        <span>{props.name}</span>
        <p className="job">{props.role}</p>
        </a>
    </section>
    );
};

export default Developer;