import React from "react";

function Home(){
    return(
        <div>
            <div className="navDiv">
                <ul className="navBarHome homeNav">
                    <li><a className='navlink homeLink' href='../'>Home</a></li>
                    <li><a className='navlink homeLink' href='../about'>About</a></li>
                    <li><a className='navlink homeLink' href='../contacts'>Contacts</a></li>
                </ul>
            </div>
            <h2 className="tag">Home.</h2>
            <div className="intro">
                <h1 id='homeHeading'>SHOPME.</h1>
                <p className="para paraOne">
                    Welcome to "SHOPME" – Your Ultimate<br></br> Destination for the Latest Fashion Trends! <br></br>Explore a world of
                    glamour with our curated collection <br></br>of cutting-edge fashion, accessories, <br></br>and lifestyle products. Discover
                    statement pieces<br></br>  that elevate your look and express your unique style.<br></br> Shop now and stay ahead of the 
                    curve with TrendLuxe Treasures' <br></br>unmatched selection of non-stop chic!
                </p>
                <p className="para paraTwo">We sell lifestyle.<br></br>Click on view to view products.</p>
            </div>
            <a id='productList' href='http://localhost:3000/productsOne'>view.</a>
        </div>

    )
}
export default Home;