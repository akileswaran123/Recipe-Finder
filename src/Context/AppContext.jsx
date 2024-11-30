import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const addToFavorites = (recipe) => {
    setFavorites((prev) => [...prev, recipe]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((recipe) => recipe.idMeal !== id));
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
