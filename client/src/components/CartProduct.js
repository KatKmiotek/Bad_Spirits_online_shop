import React, { Fragment } from 'react';

const CartProduct = ({ product, removeFromCart}) => {

  const handlePassToShoppingCart = () => {
    const removedProduct = product;
    removedProduct.stock += 1;
    removeFromCart(removedProduct)
  }

  return(
    <Fragment>
    <table className="table is-fullwidth">
    <td><img src={product.image} className="imgCart" alt={product.name}/></td>
    <td>{product.name}</td>
    <td>£{product.price.toFixed(2)}</td>
    <i className="fas fa-trash" onClick={handlePassToShoppingCart}></i>
    </table>
    </Fragment>
  )
}

export default CartProduct;
