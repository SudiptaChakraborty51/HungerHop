import "./App.css";
import logo from "./assets/hungerHop-logo.jpg";
import kareemsImg from "./assets/Kareems.jpeg";
import { restaurants } from "./assets/data";

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

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img
        className="card-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`}
        alt="Kareem's"
      />
      <div className="card-content">
        <h4 className="restaurant-name">{restaurant?.info?.name}</h4>
        <p>{restaurant?.info?.cuisines?.join(", ")}</p>
        <p>{restaurant?.info?.areaName}</p>
        <div className="star-delivery-content">
          <p>{restaurant?.info?.avgRating} stars</p>
          <p>{restaurant?.info?.sla?.slaString}</p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input className="search-input" placeholder="Search" />
      </div>
      <div className="restaurant-container">
        {restaurants?.map((res) => (
          <RestaurantCard key={res?.info?.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;
