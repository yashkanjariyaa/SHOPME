import React, { useState, useEffect } from 'react';
import Product from './product';
function Product_One(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
      <p class='index'>1/3</p>
      <a href="http://localhost:3000/" className = "topNav">HOME</a>
      <a href="http://localhost:3000/productsTwo" className = "next navbar">NEXT</a>
      <div id='smaller-wrapper'>
        {products.slice(0,9).map((product,index)=>(
          <Product key={index} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
export default Product_One;
