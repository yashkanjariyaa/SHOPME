import React from "react";

function Home(){
    return(
        <div>
            <h1 id='homeHeading'>SHOPME.</h1>
            <p className="para">
                Welcome to "SHOPME" – Your Ultimate Destination for the Latest Fashion Trends! <br></br>Explore a world of
                glamour with our curated collection of cutting-edge fashion, accessories, <br></br>and lifestyle products. Discover
                statement pieces that elevate your look and express your unique style.<br></br> Shop now and stay ahead of the 
                curve with TrendLuxe Treasures' unmatched selection of non-stop chic!
            </p>
            <a id='productList' href='http://localhost:3000/productsOne'>view.</a>
            <div class='galleryHome'>
                
            </div>
        </div>

    )
}
export default Home;