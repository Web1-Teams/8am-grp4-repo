import React from "react";
import "../../styles/recipes.css";


function Recipes (props) {
    return (
        <div className="container">
        <div className="mask-header" style={{  backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${props.image})`,}}>
          <h1 className="mask-title">{props.recipeName}</h1>
          <h2 className="mask-description">{props.description}</h2>
        </div>
      
        <h2 className="section-title">Ingredients</h2>
        <div className="ingredients">
          <div className="ingredient-item">
            <p className="ingredient-name">{props.ingName1}</p>
            <p className="ingredient-info">{props.ingDescription1}</p>
          </div>
          <div className="ingredient-item">
            <p className="ingredient-name">{props.ingName2}</p>
            <p className="ingredient-info">{props.ingDescription2}</p>
          </div>
          <div className="ingredient-item">
            <p className="ingredient-name">{props.ingName3}</p>
            <p className="ingredient-info">{props.ingDescription3}</p>
          </div>
          <div className="ingredient-item">
            <p className="ingredient-name">{props.ingName4}</p>
            <p className="ingredient-info">{props.ingDescription4}</p>
          </div>
        </div>
      
        <h2 className="section-title">Instructions</h2>
        <div className="instructions">
          <p className="instructions-title">Directions</p>
          <p className="instructions-text">{props.instructions}</p>
        </div>
      </div>
    );
};

export default Recipes;