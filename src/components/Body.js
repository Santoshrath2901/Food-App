import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);

  return (
    <div className="body">
      <span className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </span>
      <span className="cost">
        <button 
        className="cost-btn"
        onClick={()=>{
          const costList = listOfRestaurants.filter(
            (res) => res.data.costForTwo<=30000
          );
          setListOfRestraunt(costList);
        }}
        >
          PRICE :Less than 300
          </button>
      </span>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;