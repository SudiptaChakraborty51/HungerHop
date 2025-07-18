import { useState } from "react";
import logo from "../assets/hungerHop-logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/cart">Cart</Link>
          <button
            className="login-btn"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
