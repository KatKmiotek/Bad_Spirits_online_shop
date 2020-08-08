import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Product = ({product}) => {

  const url = `/products/${product.id}`;

  return (
    <Fragment>
      <img src={product.image} alt={product.name} height="200"/>
      <p>{product.name}</p>
      <p>£{product.price}</p>
      <p>ABV: {product.percent}%</p>
      <Link to={url}> <p>More Information</p> </Link>
    </Fragment>
  )
}

export default Product;
