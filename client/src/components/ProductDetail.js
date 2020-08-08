import React from 'react';

const ProductDetail = ({product}) => {

  return (
    <div className="">
      <img src={product.image} alt={product.name} height="200"/>
      <h3>{product.name}</h3>
      <p>ABV: {product.percent}%</p>
      <p>{product.description}</p>
      <p>{product.location}</p>
      <p>£{product.price}</p>
    </div>
  )
}

export default ProductDetail
