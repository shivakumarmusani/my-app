import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <p class="d-inline-flex gap-4">
        <Link to="/"><button type="button" class="btn btn-dark">Home</button></Link>
        <Link to="/GetApp"><button type="button" class="btn btn-secondary">GetApp</button></Link>
        <Link to="/RestaurantList"><button type="button" class="btn btn-secondary">RestaurantList</button></Link>
        <Link to="/RestaurantDetail"><button type="button" class="btn btn-Light">RestaurantDetail</button></Link>
        <Link to="/Cart"><button type="button" class="btn btn-Light">Cart</button></Link>
        <Link to="/Checkout"><button type="button" class="btn btn-Light">Checkout</button></Link>
        <Link to="/Login"><button type="button" class="btn btn-link">Login</button></Link>
        </p>
          </ul>
    </div>
  </div>
</nav>
</div>

    );
}


