import React from "react";
import { data1 } from "../data1";

function Checkout(){
    return(
        <>
        {data1.map((data1copy)=>{return(<div><h1>{data1copy.name}</h1><div></div>{data1copy.mobile}</div>)})}
        <div><h1>checkout1{data1.id}</h1>
        <h1>checkout1</h1>
        <h1>checkout1</h1>
        <h1>checkout1</h1>
        <h1>checkout1</h1>
        </div>

        {/* {.map(()=>{return(<div>{}</div>)})} */}
        </>
    );
}

export default Checkout;
{/* <div className="">

<div className="card-body">
<img  className="image1"src=" https://media.licdn.com/dms/image/v2/D5603AQFxWY-DTwxRbw/profile-displayphoto-shrink_400_400/B56ZRK8L9qGsAk-/0/1736424080413?e=1744243200&v=beta&t=xNvxaqoLH66ZG8H-pIbRH3QPOYWay9Nopox3NhAflJ8 " alt=""/>
<pre >
<h1 className="body ">      Shiva kumar</h1>
<p className="body ">            3844 Followers <span className="body"> Manage followers</span></p>
</pre>

<div
{data.map((copy)=>{
    return(
      <div className="card" key={copy.id}>
       <img  className ="image2"src="https://media.licdn.com/dms/image/v2/D5603AQFxWY-DTwxRbw/profile-displayphoto-shrink_400_400/B56ZRK8L9qGsAk-/0/1736424080413?e=1744243200&v=beta&t=xNvxaqoLH66ZG8H-pIbRH3QPOYWay9Nopox3NhAflJ8"  alt="" />
        <h1 className="names"> {copy.name}</h1>
        <p className="names"> {copy.title}</p>
        <p className="names"> <i className */}