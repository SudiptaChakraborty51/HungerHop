import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../assets/constants";
import { useEffect, useState } from "react";

const Body = () => {
  const [isTopRatedClicked, setIsTopRatedClicked] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState(restaurants);

  useEffect(() => {
    if(isTopRatedClicked) {
        const updatedRestaurants = restaurantsData?.filter(item => item?.info?.avgRating >= 4);
        setRestaurantsData(updatedRestaurants);
    } else {
        setRestaurantsData(restaurants);
    }
  }, [isTopRatedClicked]);

  return (
    <div className="body">
      <div className="search-bar">
        <input className="search-input" placeholder="Search" />
        <button className="top-rated-btn" onClick={() => setIsTopRatedClicked(prev => !prev)}>Top Rated</button>
      </div>
      <div className="restaurant-container">
        {restaurantsData?.map((res) => (
          <RestaurantCard key={res?.info?.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;