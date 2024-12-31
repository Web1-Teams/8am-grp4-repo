import React from "react";
import "./mini nav.css";

function MiniNav (props) {
    return (
        
<label className="menu-container"> 
  <input type="checkbox"/>
  <div class="menu-toggle" tabindex="0">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <nav className="menu-name">
    <legend> {props.clinicName} </legend>
    <ul>
      <li>
        <a href={props.link1}>
        <button>
          <span> {props.option1} </span>
        </button>
        </a>
      </li>
      <hr />
      <li>
      <a href={props.link2}>
        <button>
          <span> {props.option2} </span>
        </button>
        </a>
      </li>
      <hr />
      <li>
        <a href={props.link3}>
          <button>
            <span> {props.option3} </span>
          </button>
        </a>
      </li>
      <hr />
      <li>
        <a href={props.link4}>
          <button>
            <span> {props.option4} </span>
          </button>
        </a>
      </li>
      <hr />
      <li>
        <a href={props.link5}>
          <button>
            <span> {props.option5} </span>
          </button>
        </a>
      </li>
    </ul>
  </nav>
</label>
    );
};
export default MiniNav;