import React from "react";
// import Footer from "./Footer";

function GetApp() {
    return (
        <>
            <div class="card text-bg-primary mb-3" style={{ maxwidth: "18rem;" }}>
                <div class="card-header" style={{ paddingLeft: "500px" }}><h1>Zomato</h1></div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="card" style={{ width: "18rem;" }}>
                        <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" class="card-img-top" alt="..." />
                    </div>
                </div>

                <div class="col-6">
                    <div class="card" style={{ width: "18rem;" }}>
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
        </>
    );
}
export default GetApp;