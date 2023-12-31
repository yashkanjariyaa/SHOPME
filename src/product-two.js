import React, { useState, useEffect } from "react";
import Product from "./product";
function Product_Two() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new console.error("Network reponse not valid");
        }
        const data = await response.json();
        console.log(typeof data);
        const productsRecieved = data.products;
        setProducts(productsRecieved);
        const slicedProducts = data.products.slice(10, 19);
        setDisplayProducts(slicedProducts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  function handleSearch(e) {
    e.preventDefault();
    const lowerCaseCategory = category.toLowerCase();
    fetch(`https://dummyjson.com/products/category/${lowerCaseCategory}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(typeof data);
        const slicedProducts = data.products;
        setDisplayProducts(slicedProducts);
        console.log(displayProducts);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function handleChange(event) {
    setCategory(event.target.value);
  }
  function clearCategory() {
    setCategory("");
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div id="bigger-wrapper">
      <div className="header">
        <h1 className="logo">SHOPME.</h1>
        <ul className="navBarHome">
          <li>
            <a className="navlink" href="../">
              Home
            </a>
          </li>
          <li>
            <a className="navlink" href="../about">
              About
            </a>
          </li>
          <li>
            <a className="navlink" href="../contacts">
              Contacts
            </a>
          </li>
        </ul>
        <form className="myForm">
          <input
            type="text"
            placeholder="Search for Categories"
            className="searchInput"
            value={category}
            onChange={handleChange}
          ></input>
          <button
            className="search Button"
            onClick={(e) => {
              handleSearch(e);
            }}
          >
            Search
          </button>
          <button className="clear Button" onClick={clearCategory}>
            Clear
          </button>
        </form>
      </div>
      <p className="index">2/3</p>
      {category === "" ? (
        <>
          <a href="../productsOne" className="navbar prev">
            PREVIOUS
          </a>
          <a href="../productsThree" className="navbar next">
            NEXT
          </a>
        </>
      ) : (
        <></>
      )}

      <div id="smaller-wrapper">
        {displayProducts.map((product, index) => (
          <Product key={index} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
export default Product_Two;
