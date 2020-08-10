import React, { Fragment } from 'react';
import CartProduct from "./CartProduct.js"
import {Link} from 'react-router-dom';


const ShoppingCart = (props)=> {

  const basketNodes = props.basket.map((product, index) => {
    return (
        <div key={index}>
          <CartProduct product={product} removeFromCart={handleRemove}/>
        </div>
    );
  });


const basketTotal = props.basket.reduce((total, product)=>{
  return total + product.price
}, 0);


function handleRemove(product){
  props.removeFromCart(product);
}





  return (

    <Fragment>
    <div className='columns'>
    <div className="column is-one-quarter"></div>
    <div className="column is-two-quarter">

      {basketNodes}

    <h4>Total: {basketTotal.toFixed(2)}</h4>
    <Link to="/checkout">
    <button>Check Out</button>
    </Link>
    </div>

    <div className="column is-one-quarter"></div>
    </div>
    </Fragment>

  );
};

export default ShoppingCart;
