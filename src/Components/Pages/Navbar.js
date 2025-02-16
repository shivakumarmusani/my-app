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
        <Link to="/"><button type="button" class="btn btn-primary">Home</button></Link>
        <Link to="/GetApp"><button type="button" class="btn btn-primary">GetApp</button></Link>
        <Link to="/RestaurantList"><button type="button" class="btn btn-primary">RestaurantList</button></Link>
        <Link to="/RestaurantDetail"><button type="button" class="btn btn-primary">RestaurantDetail</button></Link>
        <Link to="/Cart"><button type="button" class="btn btn-primary">Cart</button></Link>
        <Link to="/Checkout"><button type="button" class="btn btn-primary">Checkout</button></Link>
        <Link to="/Login"><button type="button" class="btn btn-primary">Login</button></Link>
        </p>
          </ul>
    </div>
  </div>
</nav>
</div>

    );
}


