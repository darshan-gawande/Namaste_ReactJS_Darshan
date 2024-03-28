import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    const [ showIndex, setShowIndex ] = useState(null);

    const { resid } = useParams();
    
    const resInfo = useRestaurantMenu(resid);

    if(resInfo === null) {
        return (
            < Shimmer />
        )};

     //   console.log(resInfo);
    
    const { name, cuisines, costForTwoMessage} = (resInfo?.cards[2]?.card?.card?.info);

   const { itemCards } = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card);

   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  //  console.log(categories);

    return (
        <div className="text-center">
           
           <h2 className="font-bold text-xl py-4 ">{name}</h2>
           <p>{cuisines.join(", ")} - {costForTwoMessage}</p>


           <h4 className="px-4 py-4 font-semibold text-lg">Menu</h4>

           <div>
            {categories.map((category, index) => (
                <RestaurantCategory 
                key={category?.card?.card?.title} 
                data = {category?.card?.card}
                showItems = {index === showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index)}
                />
            ))}
           </div>
        </div>
    )
};



export default RestaurantMenu;



 {/* <div>
              <ul className="flex flex-wrap">{itemCards.map(item => 
            <li className="m-4 p-4 w-96 rounded-lg bg-gray-50 hover:bg-gray-200" key={item.card.info.id}>
                <img className="rounded-lg" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} /> 
                <h2>{item.card.info.name} - ₹ {item.card.info.price/100}</h2> 
            </li> 
            )}
           </ul>
           </div> */}