import React from "react";

function About(){
    return(
        <div>
        <div>
            <ul className="navBarHome">
                <li><a className='navlink homeLink' href='http://localhost:3000/'>Home</a></li>
                <li><a className='navlink homeLink' href='http://localhost:3000/about'>About</a></li>
                <li><a className='navlink homeLink' href='http://localhost:3000/contacts'>Contacts</a></li>
            </ul>
        </div>
        <h2 className="tag">About.</h2>
        <div className="intro">
            <h1 id='homeHeading'>SHOPME.</h1>
            <p className="para paraAbout">
            Welcome to our online store! We are thrilled to have you here in our vibrant digital marketplace, where a world of exceptional products and<br></br>
            unparalleled shopping experiences await. At SHOPME, we're not just a retailer – we're a destination that curates the finest selection<br></br>
            of goods that cater to your diverse needs and passions. Our journey began with a simple yet powerful idea: to provide a seamless platform where<br></br>
            you can explore, discover, and acquire top-notch items from the comfort of your own space. Whether you're seeking the latest in fashion, innovative<br></br> 
            gadgets, exquisite home decor, or unique gifts that speak volumes, our dedicated team has meticulously sourced and assembled an array of treasures that<br></br>
            embody quality and craftsmanship. Join us on this exciting venture and immerse yourself in a world of shopping like no other. Thank you for being a part of the [Store Name] experience!<br></br>
            </p>
        </div>
       </div> 
    )
}
export default About;