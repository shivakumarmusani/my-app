import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import "./GetApp.css";
import './GetApp.css';


function GetApp() {
    return (
        <>
            <div class="card text-bg-primary mb-3" style={{ maxwidth: "18rem;" }}>
                <div class="card-header" style={{ paddingLeft: "500px" }}><h1>Zomato</h1></div>
            </div>
            <div class="row">
                <div><section className="app-section">
                    <div className="app-content">
                        <div className="phone-image">
                            <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="phone-image"/>
                        </div>
                        <div className="app-info">
                        <div className="app-heading"><h4>Get the Zomato app</h4></div>
                        <div className="app-description"><p>We will send you a link, open it on your phone to download the app</p></div>
                        <div className="app-option">
                            <div className="app-option">
                                <input type="radio" id="email" name="options" checked/>
                                <label for="email">Email</label>
                            </div>
                            <div className="app-option">
                                <input type="radio" id="phone" name="options" checked/>
                                <label for="email">phone</label>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="store">
                        <div className="store-description">
                            Download app from
                        </div>
                        <div className="store-buttons row">
                            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" />
                            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" />
                        </div>
                    </div>
                </section>
                <div class="col-6">
                    <div class="card" style={{ width: "18rem;" }}>
                        <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" class="card-img-top" alt="..." />
                    </div>
                </div>
                </div>

                <div class="col-6">
                    <div class="card" style={{ height:"0rem", width: "18rem;" }}>
                        <h1 style={{padding:"40px"}}>Get the Zomato App</h1>
                        <p style={{padding:"40px"}}>We will send you a link, open it on your phone to download the app</p>
                        <div style={{ paddingLeft: "27px"}}>
                            <div>
                        <h5 style={{paddingLeft:"35px"}}>Email</h5><span><h5 style={{padding:"40px"}}>Phone</h5></span></div>
                            <label> <h4 style={{padding:"40px"}}>UserName</h4></label>
                            <input type="text" ></input>
                            <p style={{padding:"40px"}}>Download app from</p>
                            <div style={{padding:"20px"}}>
                            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"/>
                            <span style={{paddingLeft:"5px"}}><img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </>
    );
}
export default GetApp;