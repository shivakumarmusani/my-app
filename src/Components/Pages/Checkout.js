import React from "react";
import { data1 } from "./Components/data1";

function Checkout(){
    console.log(data1)
    const Checkout =()=>{
        return(
            <div>{data1.map((datacopy)=>{return(<div>{datacopy.name}</div>)})}</div>
        )
    }
    return(
        <>
        <div><h1>checkout1</h1>
        <h1>checkout1</h1>
        <h1>checkout1</h1>
        <h1>checkout1</h1>
        <h1>checkout1</h1>
        </div>
        </>
    );
}

export default Checkout;