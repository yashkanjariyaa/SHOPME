import React, { useState, useEffect } from 'react';
import Product from './product';

function Product_One(){
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [displayProducts, setDisplayProducts] = useState([]);
  const [flag, setFlag] = useState(false);
  const [skip, setSkip] = useState(0);
  const show = 10;
  //let showFlag = 0;
  
  useEffect(()=>{      
      fetch('https://dummyjson.com/products')
        .then((Response)=> Response.json())
        .then((data)=>{
          console.log(typeof data)
          const productsRecieved = data.products;
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
  function handleSearch(e){
    e.preventDefault();
    const lowerCaseCategory = category.toLowerCase();
    fetch(`https://dummyjson.com/products/category/${lowerCaseCategory}`)
      .then((response)=>{
        console.log(response);
        return response.json();
      })
      .then((data)=>{
        console.log(data);
        console.log(typeof data);
        const slicedProducts = data.products;
        setDisplayProducts(slicedProducts);
        console.log(displayProducts);
      })
      .catch((err)=>{
        console.log(err.message);
      });
  }
  /*function next(){
    showFlag++;
    if(showFlag<3 && showFlag!=0){
      setSkip(showFlag*10);
    }
    fetch(`https://dummyjson.com/products?limit=${show}&skip=${skip}&select=title,price,discountPercentage,category,rating,description,stock,brand,images`)
    .then((response)=>{
      console.log(response);
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      console.log(typeof data);
      const slicedProducts = data.products;
      setDisplayProducts(slicedProducts);
      console.log(displayProducts);
    })
    .catch((err)=>{
      console.log(err);
    });
  }*/
  function handleChange(event){
    const searchedCategory = event.target.value;
    setCategory(searchedCategory);
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
                <h1 className='name logo'>SHOPME.</h1>
                <h1 className='letter logo'>S</h1>
              <form className="myForm">
                <input type='text' 
                placeholder='Search for Categories' 
                className='searchInput'
                value={category}
                onChange={handleChange}>
                </input>
                <button className='search Button' onClick={(e)=>{handleSearch(e)}}>Search</button>
                <button className='clear Button' onClick={clearCategory}>Clear</button>
              </form>
                {/*<button className='menu' onClick={displayMenu}>Menu</button>*/}
                    <ul className='productNav'>
                      <li><a className='navlink' href='../'>Home</a></li>
                      <li><a className='navlink' href='../about'>About</a></li>
                      <li><a className='navlink' href='../contacts'>Contacts</a></li>
                    </ul>
            </div>
      <p className='index'>1/3</p>
      <div>
        { 
        (category ==='')?
          <a href='../productsTwo' 
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
