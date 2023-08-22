import React, { useState, useEffect } from 'react';
import Product from './product';

function Product_One(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let [category, setCategory] = useState('');
  const categoryArray = [];
  const productsOne = products.slice(0,9);
  async function search(){
    if(category != null){
      for(let i = 0; i < 10; i++){
        if(category === productsOne.category[i]){
          categoryArray.push(productsOne[i]);
        }else{
          alert('category does not exist');
        }
      }
    }
  }
  function clearCategory(){
    setCategory('');
  }
  useEffect(()=>{
    async function fetchProducts(){
      try {
        const response = await fetch('https://dummyjson.com/products');
        if(!response.ok){
          throw new console.error('Network reponse not valid');
        }
        const data = await response.json();
        console.log(typeof data)
        console.log(data.products);
        setProducts(data.products);
        if(!(products === data)){
          console.log('error');
          console.log(products);
        }
        setLoading(false);
      }catch(error){
        console.log(error);
        setLoading(false)
      }
    }
    fetchProducts(); 
  },);
  /*Tried to resize height of individual images-container on display according to
  height of images available, but it doesnt work
  function slidesResizer(){
    let imgHeight = [];
    let imgWidth = [];
    const slide = document.querySelectorAll('slides');
    for(let i = 0; i < products.length; i++){
      for(let j = 0; j < products.images.length; j++){
        const imageObject = new Image();
        imageObject.src = products.images[j];
        imageObject.onload = function(){
          imgHeight[j] = imageObject.height;
          imgWidth[j] = imageObject.width;
          console.log(imgHeight);
          console.log(imgWidth);
        }
        for(let i = 0; i < imgHeight; i++){
          if(imgHeight[i] < imgHeight[i+1]){
            let temp = imgHeight[i+1];
            imgHeight[i+1] = imgHeight[i];
            imgHeight[i] = temp;
          }   
        }
      }
      slide[i].style.setProperty('--Slides-height',imgHeight[0]);
    }
  }
  slidesResizer();*/
  if(loading){
    return <div>Loading...</div>;
  }
  return(
    <div id='bigger-wrapper'>
      <h1>SHOPME.</h1>
            <div>
                <ul className="navBarHome">
                    <li><a className='navlink' href='http://localhost:3000/'>Home</a></li>
                    <li><a className='navlink' href='http://localhost:3000/about'>About</a></li>
                    <li><a className='navlink' href='http://localhost:3000/contacts'>Contacts</a></li>
                </ul>
            </div>
      <p class='index'>1/3</p>
      <a href="http://localhost:3000/productsTwo" className = "next navbar">NEXT</a>
      {/*<form class="myForm"action={search}>
        <input type='text' 
        placeholder='Search' 
        className='search' 
        value={category}
        onChange={(e)=>setCategory(e.target.value)}>
        </input>
        <input type='submit' value='Search'></input>
        <button onClick={clearCategory}>All</button>
      </form>*/}
      <div id='smaller-wrapper'>
        {productsOne.map((product,index)=>(
          <Product key={index} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
export default Product_One;
