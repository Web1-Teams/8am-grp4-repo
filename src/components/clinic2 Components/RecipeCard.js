import React from "react";

const RecipeCard = ({ title, description, image, ingredients, instructions }) => {
  return (
    <div className="container">
      <div
        className="mask-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${image})`,
        }}
      >
        <h1 className="mask-title">{title}</h1>
        <h2 className="mask-description">{description}</h2>
      </div>
      <h2 className="section-title">Ingredients</h2>
      <div className="ingredients">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-item">
            <p className="ingredient-name">{ingredient.name}</p>
            <p className="ingredient-info">{ingredient.info}</p>
          </div>
        ))}
      </div>
      <h2 className="section-title">Instructions</h2>
      <div className="instructions">
        <p className="instructions-title">Directions</p>
        <p className="instructions-text">{instructions}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
