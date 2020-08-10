import React, { Fragment } from 'react';

const CartProduct = ({ product, removeFromCart}) => {

  const handlePassToShoppingCart = () => {
    const removedProduct = product;
    removedProduct.stock += 1;
    removeFromCart(removedProduct)
  }

  return(
    <Fragment>
    <p>{product.name}</p>
    <p>{product.price}</p>
    <button onClick={handlePassToShoppingCart}>Remove</button>
    </Fragment>
  )
}

export default CartProduct;
