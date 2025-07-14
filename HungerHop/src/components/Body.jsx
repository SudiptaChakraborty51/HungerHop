import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [isTopRatedClicked, setIsTopRatedClicked] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const apiRes = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // const apiRes = await fetch(
    //   "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    // );
    const res = await apiRes.json();
    setRestaurantsData(
      res?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      res?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isTopRatedClicked) {
      const updatedRestaurants = restaurantsData?.filter(
        (item) => item?.info?.avgRating >= 4.5
      );
      setFilteredRestaurants(updatedRestaurants);
    } else {
      setFilteredRestaurants(restaurantsData);
    }
  }, [isTopRatedClicked, restaurantsData]);

  useEffect(() => {
    if (!searchedRestaurant.trim()) {
      setFilteredRestaurants(restaurantsData);
    } else {
      const filteredList = restaurantsData?.filter((item) =>
        item.info.name.toLowerCase().includes(searchedRestaurant.toLowerCase())
      );
      setFilteredRestaurants(filteredList);
    }
  }, [searchedRestaurant, restaurantsData]);

  return (
    <div className="body">
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchedRestaurant}
          onChange={(e) => setSearchedRestaurant(e.target.value)}
        />
        <button
          className="top-rated-btn"
          onClick={() => setIsTopRatedClicked((prev) => !prev)}
        >
          Top Rated
        </button>
      </div>
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="restaurant-container">
          {filteredRestaurants?.map((res) => (
            <RestaurantCard key={res?.info?.id} restaurant={res} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
