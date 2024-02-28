import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    const { resid } = useParams();
    
    const resInfo = useRestaurantMenu(resid);

    // console.log(resInfo);

    if(resInfo === null) {
        return (
            < Shimmer />
        )};
    
    const { name, cuisines, costForTwoMessage} = (resInfo?.cards[0]?.card?.card?.info);

   const { itemCards } = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    return (
        <div>
            <h2>{name}</h2>
           <p>{cuisines.join(", ")} - {costForTwoMessage}</p>


           <h4>Menu</h4>
           <ul>
            {itemCards.map(item => <li key={item.card.info.id}> {item.card.info.name} - ₹ {item.card.info.price/100} </li> )}
           </ul>

        </div>
    )
};

export default RestaurantMenu;