import React from 'react';

const Product = ({product}) => {
    return(
        <div className='product'>
            <p className='category moreinfo info'>{product.category}</p>
            <div className='gallery'>
                <div className = 'image-container info'>
                    {product.images.map((image, index)=>(
                        <div  className='slides'>
                            <img src={image} alt={product.title}></img> 
                        </div>
                    ))}
                </div>
            </div>
            <h2 className='heading info'>{product.title}</h2>
            <p className='price info'>${product.price}</p>
            <p className='discount info'>Discount {product.discountPercentage}%</p>
            <h3 className='info'>{product.brand}</h3>
            <p id='description' className='info'>{product.description}</p>
            <p className='rating moreinfo info'>{product.rating}/5</p>
            <p className='stock moreinfo info'>Stock available : {product.stock}</p>
            <a href='#' className='info buy'>Buy</a>
            <a href='#' className='info atc'>Add to cart</a>
            <img src={product.thumbnail} className='thumbnail' alt={product.title}></img>
        </div>
    )
}

export default Product