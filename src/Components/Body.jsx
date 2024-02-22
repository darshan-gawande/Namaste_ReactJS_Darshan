import RestaurantCart from "./RestaurantCart";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [fileredRestaurant, setFilterRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

       setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    };


        return (listOfRestaurant.length === 0) ? < Shimmer /> :  (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                            setSearchText(e.target.value);
                        }} />
                            <button className="search-btn" onClick={() => {
                                
                                const fileredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                                setFilterRestaurant(fileredRestaurant);

                            }}>Search</button>
                       
                    </div>
                    <button className="filter-btn" 
                     onClick={() =>
                        {
                        const filterList = listOfRestaurant.filter((res) => res.info.avgRating > (4.0));
                        setListOfRestaurant(filterList);
                        }}> 
                        Top Rated Restaurant
                    </button>
                </div>
               

                <div className="res-container">
                   {
                    fileredRestaurant.map((restaurant) => (
                      <Link 
                      key= {restaurant.info.id} 
                      to={"/restaurantmenu/" + restaurant.info.id}  
                      >
                      <RestaurantCart resData={restaurant} />
                      </Link> 
                    ))}
                </div>
            </div>
        );
    };

    export default Body;