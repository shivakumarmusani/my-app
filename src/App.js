import React from "react";
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home"; //Home page
import RestaurantList from "./Components/Pages/RestaurantList";// Restaurant List
import RestaurantDetail from "./Components/Pages/RestaurantDetail";//Individual Restaurant Detail
import Navbar from "./Components/Pages/Navbar";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";

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
      </Routes>
      </BrowserRouter>
      
  );
}
export default App;