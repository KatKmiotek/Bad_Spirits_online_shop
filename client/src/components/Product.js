import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Product = ({ product, addToCart }) => {

  const handlePassToList = () => {
    if(product.stock > 0){
      const updatedProduct = product;
      updatedProduct.stock -= 1;
      addToCart(updatedProduct)
    }
  }


  const url = `/products/${product.id}`;

  return (
    <Fragment>
    <Link to={url}>
      <img src={product.image} height="100" alt="product"/>
    </Link>
      <p>{product.name}</p>
      <p>£{product.price}</p>
      <p>ABV: {product.percent}%</p>
      <button onClick={handlePassToList}>Add to Card</button>
    </Fragment>
  );
};

export default Product;
