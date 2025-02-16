import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "../Footer/Footer";
//import "./GetApp.css";
import './GetApp.css';


function GetApp() {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-md">
    <a class="navbar-brand" href="#"><h1 className="navzomato">Zomato</h1></a>
    Login Sign up
  </div>
</nav>
        <section class="app-section">
        <div class="content">
          <div class="phone-image">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
            />
          </div>
          <div class="app-info">
            <div class="phone-title">Get the Zomato app</div>
            <div class="app-description">
              We will send you a link, open it on your phone to download the app
            </div>

            <section class="option-selector">
              <div class="radio-option">
                <input id="email" type="radio" name="radio" checked />
                <label for="email">Email</label>
              </div>
              <div class="radio-option">
                <input id="phone" type="radio" name="radio" checked />
                <label for="phone">Phone</label>
              </div>
            </section>

            <section class="email-input">
              <input type="email" placeholder="Email" class="email" />
              <button class="btn">Share App Link</button>
            </section>

            <section class="store">
              <div class="caption">Download app from</div>
              <div class="buttons">
                <img
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                />
                <img
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                />
              </div>
            </section>
          </div>
        </div>
      </section>
            <div><Footer/></div>
        </>
    );
}
export default GetApp;