import React, {Fragment} from 'react';


const Product = ({product}) => {

  return (
    <Fragment>
      <img src={product.image} height="200"/>
      <p>{product.name}</p>
      <p>£{product.price}</p>
      <p>ABV: {product.percent}%</p>
    </Fragment>
  )
}

export default Product;
