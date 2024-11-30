import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails";
import Favorites from "./Pages/Favourites";




const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
