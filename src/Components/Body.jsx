import RestaurantCart from "./RestaurantCart";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



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

    const OnlineStautus = useOnlineStatus();

    if(OnlineStautus === false) {
        return <h1>No internet!!!</h1>
         
    }


        return (listOfRestaurant.length === 0) ? < Shimmer /> :  (
            <div className="body">
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                            setSearchText(e.target.value);
                        }} />
                            <button className="px-4 py-2 bg-green-400 m-2 rounded-lg" onClick={() => {
                                
                                const fileredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                                setFilterRestaurant(fileredRestaurant);

                            }}>Search</button>
                       
                    </div>


                    <div className="search m-4 p-4 items-center">
                        <button className="px-4 py-2 bg-gray-200 rounded-lg m-2" 
                        onClick={() =>
                        {
                        const filterList = listOfRestaurant.filter((res) => res.info.avgRating > (4.0));
                        setListOfRestaurant(filterList);
                        }} > 
                        Top Rated Restaurant
                         </button>
                    </div>
                    
                </div>
               

                <div className="flex flex-wrap ">
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