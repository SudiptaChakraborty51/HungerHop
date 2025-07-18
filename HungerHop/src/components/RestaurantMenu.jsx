import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const fetchData = async (resId) => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=${resId}`
      );
      const json = await response.json();
      setResInfo(json?.data?.cards?.[2]?.card?.card?.info);
      const groupedCardObj = json?.data?.cards?.find(
        (card) => card?.groupedCard !== undefined
      );
      const recommendedCard =
        groupedCardObj?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
          (card) =>
            card?.card?.card?.title?.trim()?.toLowerCase() === "recommended"
        );
      setMenuItems(recommendedCard?.card?.card?.itemCards || []);
    } catch (error) {
      console.error("Error fetching restaurant menu data:", error);
    }
  };

  useEffect(() => {
    fetchData(resId);
  }, [resId]);

  if (!resInfo) return <Shimmer />;

  return (
    <div className="restaurant-menu">
      <h1>{resInfo?.name}</h1>
      <h4>{resInfo?.cuisines?.join(", ")}</h4>
      <h3>
        {resInfo?.avgRating} stars - {resInfo?.costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      {menuItems?.length === 0 ? (
        <p>No items available in the menu.</p>
      ) : (
        <ul>
          {menuItems?.map((item) => (
            <li key={item?.card?.info?.id}>
              <h3>{item?.card?.info?.name}</h3>
              <p>{item?.card?.info?.description}</p>
              <p>
                Price: ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
