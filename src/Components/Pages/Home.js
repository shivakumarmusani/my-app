import React from "react";
import Footer from "./Footer/Footer";
import { data1 } from "../data1";


function Home() {
    return (
        <>
            <div>
                <h1>welcome to Home</h1>
                <img className="Homeimg" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" />
            </div>
            <div>
                <div class="row row-cols-1 row-cols-md-5 g-4 p-4">
                    <div class="card" style={{ width: "18rem;" }}>
                        <img src="https://i.pinimg.com/236x/16/92/b3/1692b3193ce168983c05e8f42b2997c6.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem;" }}>
                        <img src="https://i.pinimg.com/236x/16/92/b3/1692b3193ce168983c05e8f42b2997c6.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: "18rem;" }}>
                        <img src="https://i.pinimg.com/236x/16/92/b3/1692b3193ce168983c05e8f42b2997c6.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: "18rem;" }}>
                        <img src="https://i.pinimg.com/236x/16/92/b3/1692b3193ce168983c05e8f42b2997c6.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: "18rem;" }}>
                        <img src="https://i.pinimg.com/236x/16/92/b3/1692b3193ce168983c05e8f42b2997c6.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                

                {data1.map((data1copy)=>{return(<div>
                <div class="card" style={{width: "1rem;"}}>
  <img src={data1copy.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{data1copy.name}</h5>
    <p class="card-text">{data1copy.mobile}</p>
    <a href="#" class="btn btn-primary">{data1copy.habit}</a>
  </div>
</div>
</div>)})}
</div>
            </div>
            <div><Footer/></div>
        </>
    );
}
export default Home;