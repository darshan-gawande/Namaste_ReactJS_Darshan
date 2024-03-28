import { CDN_URL } from "../utils/constants";


  const RestaurantCart = (props) => {
        const { resData } = props;

      const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, areaName} = resData?.info;

        return (
            <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200" >
                <img className="rounded-lg" 
                 src={ CDN_URL + cloudinaryImageId } alt="logo" /> 
                 <h3 className="font-bold text-xl py-8">{ name }</h3>
                <h4>{ cuisines.join(", ") } </h4>
                <h4>{ costForTwo }</h4>
                <h4>{ avgRating }</h4>
                <h4>{ areaName }</h4>
            </div>
        );
    };


    // Higher Order Function
    // take an Input component and return component

    export const promotedRestaurant = (RestaurantCart) => {
      return () => {
        return (
          <div>
            <h3>Promoted</h3>
          </div>
        )
      }
    }

    export default RestaurantCart;
    