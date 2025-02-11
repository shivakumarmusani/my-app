import React from "react";
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home"; //Home page
import RestaurantList from "./Components/Pages/RestaurantList";// Restaurant List
import RestaurantDetail from "./Components/Pages/RestaurantDetail";//Individual Restaurant Detail
// import Navbar from "./components/Navbar"; // Navigation bar
// import Footer from "./components/Footer"; // Footer component

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<RestaurantList />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
      </BrowserRouter>
  );
}
export default App;