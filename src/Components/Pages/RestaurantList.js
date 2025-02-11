import React from "react";
import { Link } from "react-router-dom";

const restaurants = [
    {id:1,
        name: "i like it",
        cuisine: "italian"
    },
    {id:2,
        name: "spice hub",
        cuisine: "indian"
    },
];
function RestaurantList(){
    return(
        <div><h1>List of RestaurantList</h1>
        <ul>
            {restaurants.map((restaurant) =>(<li key={restaurant.id}>
                <Link to={`/restaurant/${restaurant.id}`}>
                {restaurant.name} - {restaurant.cuisine}</Link>
            </li>))}</ul></div>
        
    );
}
export default RestaurantList;