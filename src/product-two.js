import React, { useState, useEffect } from 'react';
import Product from './product';
function Product_Two(){
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
  if(loading){
    return <div>Loading...</div>;
  }
  return(
    <div id='bigger-wrapper'>
      <h1>SHOPME.</h1>
      <p className='index'>2/3</p>
      <a href="http://localhost:3000/productsOne" className = "navbar prev">PREVIOUS</a>
      <a href="http://localhost:3000/productsThree" className = "navbar next">NEXT</a>
      <div id='smaller-wrapper'>
        {products.slice(10,19).map((product,index)=>(
          <Product key={index} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
export default Product_Two;
