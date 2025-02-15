import React from "react";
//import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home"; //Home page
import RestaurantList from "./Components/Pages/RestaurantList";// Restaurant List
import RestaurantDetail from "./Components/Pages/RestaurantDetail";//Individual Restaurant Detail
import Navbar from "./Components/Pages/Navbar";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";
import GetApp from "./Components/Pages/GetApp";
import { data1 } from "./Components/data1";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RestaurantList" element={<RestaurantList />} />
      <Route path="/RestaurantDetail" element={<RestaurantDetail />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/GetApp" element={<GetApp />} />
      </Routes>
      </BrowserRouter>
      
  );
}
export default App;


<div className="">

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
        <p className="names"> <i className