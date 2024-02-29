import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";


const RestaurantMenu = () => {
    const { resid } = useParams();
    
    const resInfo = useRestaurantMenu(resid);

     console.log(resInfo);

    if(resInfo === null) {
        return (
            < Shimmer />
        )};
    
    const { name, cuisines, costForTwoMessage} = (resInfo?.cards[0]?.card?.card?.info);

   const { itemCards } = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    return (
        <div>
           
            <h2 className="font-bold text-xl py-4">{name}</h2>
           <p>{cuisines.join(", ")} - {costForTwoMessage}</p>


           <h4 className="px-4 py-4 font-semibold text-lg">Menu</h4>
           
             <ul className="flex flex-wrap">{itemCards.map(item => 
            <li className="m-4 p-4 w-96 rounded-lg bg-gray-50 hover:bg-gray-200" key={item.card.info.id}>
                <img className="rounded-lg" src={ CDN_URL + item.card.info.imageId} alt={item.card.info.name} /> 
                <h2>{item.card.info.name} - ₹ {item.card.info.price/100}</h2> 
                
            </li> 
            )}
           </ul>
          

        </div>
    )
};

export default RestaurantMenu;