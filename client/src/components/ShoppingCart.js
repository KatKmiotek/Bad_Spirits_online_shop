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



function handleRemove(product){
  props.removeFromCart(product);
}



  return (

    <Fragment>
    <div className='columns'>
    <div className="column is-one-quarter"></div>
    <div className="column is-two-quarter">
    <h2 className="large-title">My Basket</h2>
      {basketNodes}

    <h4><strong>Total: £{props.cartTotal}</strong></h4>


    <Link to='/checkout'>
    <button className="button" style={{ display: props.basket.length ===0? 'none': 'inline-block'}}>Check Out</button>
    </Link>
    </div>

    <div className="column is-one-quarter"></div>
    </div>
    </Fragment>

  );
};

export default ShoppingCart;
