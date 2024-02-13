import { CDN_URL } from "../utils/constants";


  const RestaurantCart = (props) => {
        const { resData } = props;

      const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, areaName} = resData?.info;

        return (
            <div className="res-card">
                <img className="card-logo" 
                 src={ CDN_URL + cloudinaryImageId} alt="logo" /> 
                 <h3>{ name}</h3>
                <h4>{ cuisines.join(", ")}</h4>
                <h4>{ costForTwo}</h4>
                <h4>{ avgRating}</h4>
                <h4>{ areaName}</h4>
            </div>
        );
    };

    export default RestaurantCart;
    