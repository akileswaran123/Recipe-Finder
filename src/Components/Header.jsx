import React from "react";
import { Link } from "react-router-dom";
import"./Header.css"


const Header = () => {
  return (
    <div  className="header">
    <header>
      <h1>DELICIOUS FOOD PARK</h1>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/favorites">Favorites</Link>
      </nav>
      
    </header>
    </div>
  );
};
<footer>
     
</footer>

export default Header;
