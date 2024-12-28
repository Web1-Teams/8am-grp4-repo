 import React from "react";
 import classNames from "classnames";
import MiniNav from "../MiniNavBar/MiniNavbar";
 import "./Header.css";
 const Header = (props) => {
 
   const headerClass = classNames("card", props.className);

   return (
    
     <div className="cardBox">
      
       <div className={headerClass}>
       <div className="miniNavbar">       <MiniNav {...props}/> </div>

         <h4 className="h4">{props.ClinicName}</h4>
        <p className="p1">{props.ClinicAyah}</p>
         <div className="content">
           <h3 className="h3" >Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet,
              consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit
           </h3>
         </div>
       </div>
     </div>
   );
 };
 export default Header;
