import React from "react";
import {IMG_SHOP} from '../utills/constants'

const ResturantCard = (props) => {
    // co÷nsole.log(props)
    let res = props.resData.data;
    return(
        <div className="restro-card">
            <img about="res" src={IMG_SHOP} />
            <h3>{res.restaurantName}</h3>
            <h4>{res.cuisine}</h4>
            <h4>{res.avgRating}</h4>
            <h4>{res.deliveryTime}</h4>
        </div>
    )
}
export default ResturantCard