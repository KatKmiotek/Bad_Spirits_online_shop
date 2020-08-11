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
      <img className="image-hover" src={product.image} height="100" alt="product"/>
    </Link>
      <p>{product.name}</p>
      <p>£{product.price.toFixed(2)}</p>
      <p>ABV: {product.percent}%</p>
      <button style={{display: product.stock > 0 ? 'inline-block' : 'none' }} className="button" onClick={handlePassToList}>Add to Cart</button>
      <button style={{display: product.stock === 0 ? 'inline-block' : 'none' }} className="button" >Sold Out</button>

    </Fragment>
  );
};

export default Product;
