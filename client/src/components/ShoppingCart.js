import React, { Fragment } from 'react';

const ShoppingCart = (props)=> {

  const basketNodes = props.basket.map((product, index) => {
    return (
        <tr key={index}>
        <td>{product.name}</td>
        <td>price: £{product.price}</td>
        <td><button onClick={handleRemove}>remove</button></td>
        </tr>
    );
  }
);
const basketTotal = props.basket.reduce((total, product)=>{
  return total + product.price
}, 0);


function handleRemove(product){
  props.removeFromCart(product)
};


  return (

    <Fragment>
    <div className='columns'>
    <div className="column is-one-quarter"></div>
    <div className="column is-two-quarter">
    <table>
      {basketNodes}
    </table>
    <h4>Total: {basketTotal.toFixed(2)}</h4>
    <button>Check Out</button>
    </div>

    <div className="column is-one-quarter"></div>
    </div>
    </Fragment>

  );
};

export default ShoppingCart;
