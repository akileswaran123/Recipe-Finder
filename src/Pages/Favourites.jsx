import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "./favourites.css";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(AppContext);

  return (
    <div className="favorites">
      <h1 id="head">Favorite Recipes</h1>
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div key={recipe.idMeal} className="favorite-item">
            
            <img 
              src={recipe.strMealThumb} 
              alt={recipe.strMeal} 
              className="favorite-image" 
            />
            <h3>{recipe.strMeal}</h3>

           
            <button onClick={() => removeFromFavorites(recipe.idMeal)} id="bot">
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No favorites added yet</p>
      )}
    </div>
  );
};

export default Favorites;