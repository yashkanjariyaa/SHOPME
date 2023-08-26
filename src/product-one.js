import React, { useState, useEffect } from 'react';
import Product from './product';
import { clear } from '@testing-library/user-event/dist/clear';
import axios from "axios";

function Product_One(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [displayProducts, setDisplayProducts] = useState([]);
  
  useEffect(()=>{      
      fetch('https://dummyjson.com/products')
        .then((Response)=> Response.json())
        .then((data)=>{
          console.log(typeof data)
          const productsRecieved = data.products;
          setProducts(productsRecieved);
          const slicedProducts = data.products.slice(0,9); 
          setDisplayProducts(slicedProducts);
          console.log(displayProducts);
          setLoading(false);
        })
        .catch((err)=>{
          console.log(err.message);
          setLoading(false);
        });
    },[]);
  function handleSearch(){
        /*axios
        .get(
          'https://dummyjson.com/products/category/${category}'
          )
        .then((response)=>{
          const data = response.data;
          console.log(typeof data);
          console.log(data);
          const slicedProducts = data.products;
          setDisplayProducts(slicedProducts);
          console.log(displayProducts);
        })
        .catch((err)=>{
          console.log(err.message);
        })*/
        try{
          console.log(category);
          const filteredProdcuts = products.filter(
              (product)=>{
                return category.toLowerCase() === product.category.toLowerCase();
              }
          );
        setDisplayProducts(filteredProdcuts);
        console.log(displayProducts);
    }catch(err){
      console.log(err);
    }
}
  function handleChange(event){
    const searchedCategory = event.target.value;
    setCategory(searchedCategory.toLowerCase());
  }
  function clearCategory(){
    setCategory('');
  }
  if(loading){
    return <div>Loading...</div>;
  }

  return(
    <div id='bigger-wrapper'>
            <div className='header'>
              <h1 className='logo'>SHOPME.</h1>
              <ul className="navBarHome">
                  <li><a className='navlink' href='http://localhost:3000/'>Home</a></li>
                  <li><a className='navlink' href='http://localhost:3000/about'>About</a></li>
                  <li><a className='navlink' href='http://localhost:3000/contacts'>Contacts</a></li>
              </ul>
              <form className="myForm">
                <input type='text' 
                placeholder='Search for Categories' 
                className='searchInput'
                value={category}
                onChange={handleChange}>
                </input>
                <button type='button' className='search Button' onClick={handleSearch}>Search</button>
                <button className='clear Button' onClick={clearCategory}>Clear</button>
              </form>
            </div>
      <p className='index'>1/3</p>
      <div>
      { 
        (category ==='')?
          <a href="http://localhost:3000/productsTwo" 
          className = "next navbar">NEXT</a> : <></>
        }
      </div>
      <div id='smaller-wrapper'>  
        {displayProducts.map((product,index)=>(
          <Product key={index} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
export default Product_One;
