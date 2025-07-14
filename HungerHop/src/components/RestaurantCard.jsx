import { CDN_URL } from "../assets/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img
        className="card-image"
        src={`${CDN_URL}${restaurant?.info?.cloudinaryImageId}`}
        alt="Kareem's"
      />
      <div className="card-content">
        <h4 className="restaurant-name">{restaurant?.info?.name}</h4>
        <p>{restaurant?.info?.cuisines?.join(", ")}</p>
        <p>{restaurant?.info?.areaName}</p>
        <p>{restaurant?.info?.costForTwo}</p>
        <div className="star-delivery-content">
          <p>{restaurant?.info?.avgRating} stars</p>
          <p>{restaurant?.info?.sla?.slaString}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;