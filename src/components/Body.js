import resList from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"

function cheap(){
  if(restaurant.data.costForTwo<300)
  
}

const Body = () => (
    <div className="body">
    <div className="cheap">
      <button onclick={cheap}>Less than 3000 </button>
    </div>
    <div className="res-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
      ))}
    </div>
  </div>
)

export default Body