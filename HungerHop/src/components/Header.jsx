import logo from "../assets/hungerHop-logo.jpg";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;