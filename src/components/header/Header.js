 import React from "react";
 import classNames from "classnames";
 import "./Header.css";
import MiniNav from "../MiniNavBar/MiniNavbar";
import About from "../About/About";
 const Header = (props) => {
 
   const headerClass = classNames("card", props.className);

   return (
    
     <div className="cardBox">
      
       <div className={headerClass}>
       <div className="miniNavbar">       <MiniNav {...props}/> </div>

         <h4 className="h4">{props.ClinicName}</h4>
        <p className="p1">{props.ClinicAyah}</p>
         <div className="content">
           <h3 className="h3" >
            <About {...props}/>
           </h3>
         </div>
       </div>
     </div>
   );
 };
 export default Header;
