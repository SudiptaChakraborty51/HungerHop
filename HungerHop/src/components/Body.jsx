import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../assets/constants";

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

export default Body;