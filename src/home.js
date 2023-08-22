import React from "react";

function Home(){
    return(
        <div>
            <div className="navDiv">
                <ul className="navBarHome">
                    <li><a className='navlink' href='http://localhost:3000/'>Home</a></li>
                    <li><a className='navlink' href='http://localhost:3000/about'>About</a></li>
                    <li><a className='navlink' href='http://localhost:3000/contacts'>Contacts</a></li>
                </ul>
            </div>
            <h2 className="tag">Home.</h2>
            <div className="intro">
                <h1 id='homeHeading'>SHOPME.</h1>
                <p className="para paraOne">
                    Welcome to "SHOPME" – Your Ultimate Destination for the Latest Fashion Trends! <br></br>Explore a world of
                    glamour with our curated collection of cutting-edge fashion, accessories, <br></br>and lifestyle products. Discover
                    statement pieces that elevate your look and express your unique style.<br></br> Shop now and stay ahead of the 
                    curve with TrendLuxe Treasures' unmatched selection of non-stop chic!
                </p>
                <p class="para paraTwo">We sell lifestyle.<br></br>Click on view to view products.</p>
            </div>
            <a id='productList' href='http://localhost:3000/productsOne'>view.</a>
        </div>

    )
}
export default Home;