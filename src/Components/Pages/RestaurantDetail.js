import React from "react";
import { useParams } from "react-router-dom";

const restaurantData = {
    1: {name: "i like it",
        cuisine: "italian",
        rating: 4.5
    },
    2:{name: "spice hub",
        cuisine: "indian",
        rating: 4.9
    },
};
function RestaurantDetail(){
    let {id} = useParams(); //get dynamic id from url
    const restaurant = restaurantData[id];

    return(
        <div><h1>{restaurant.name}</h1>
        <p>cuisine: {restaurant.cuisine}</p>
        <p>Rating: {restaurant.rating}</p>
        </div>
    );
}
export default RestaurantDetail;