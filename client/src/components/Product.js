import React, {Fragment} from 'react';


const Product = ({product, addToCart}) => {

  const handlePassToList = () => {
    const updatedProduct = product;
    updatedProduct.stock -= 1;
    addToCart(updatedProduct)
  }

  return (
    <Fragment>
      <img src={product.image} height="200"/>
      <p>{product.name}</p>
      <p>£{product.price}</p>
      <p>ABV: {product.percent}%</p>
      <button onClick={handlePassToList}>Add To Cart</button>
    </Fragment>
  )
}

export default Product;
