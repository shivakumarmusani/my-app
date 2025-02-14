import React from "react";
import { data } from "react-router-dom";

function Checkout(){
    return(
        <div><h1>checkout1</h1>
        <h1>checkout1</h1>
        <h1>checkout1</h1>
        <h1>checkout1</h1>
        <h1>checkout1</h1>
        </div>
    );
}

const Checkout =() => {
    return(
        <div>
            {data.map((datacopy)=>{
                return(
                    <div>
                        <div>{datacopy.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Checkout;