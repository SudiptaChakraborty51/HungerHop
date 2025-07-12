import { useState } from "react";
import logo from "../assets/hungerHop-logo.jpg";

const Header = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;