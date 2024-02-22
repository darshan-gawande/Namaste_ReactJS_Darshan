import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resid} = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
            const data = await fetch( MENU_API + resid);


            const json = await data.json();
            
            setResInfo(json.data);
        }

    if(resInfo === null) {
        return (
            < Shimmer />
        )
    };
    
    const {name, cuisines, costForTwoMessage} = (resInfo?.cards[2]?.card?.card?.info);

   const  { itemCards  } = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

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