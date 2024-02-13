import RestaurantCart from "./RestaurantCart";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
   

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);


        return (
            <div className="body">
                {/* <div className="search"> Search </div> */}

                <div className="filter">
                    <button className="filter-btn" 
                     onClick={() => {
                        const filterList = listOfRestaurant.filter((res) => res.info.avgRating > (4.0));
                        setListOfRestaurant(filterList);
                }}
                > 
                    Top Rated Restaurant</button>
                </div>
               

                <div className="res-container">
                   {
                    listOfRestaurant.map((restaurant) => (
                      < RestaurantCart key={restaurant.info.id} resData={restaurant} />
                    ))
                    };

                </div>

            </div>
        )
    };

    export default Body;