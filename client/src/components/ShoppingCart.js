import React, { Fragment } from 'react';

const ShoppingCart = (props)=> {
  const basketNodes = props.basket.map((product, index) => {
    return (
      <div className="component" key={index}>
        <li>
        <p>{product.name}</p>
        <p>price: {product.price}</p>
        <imput text="text" placeholder="1">quantity</imput>
        <button>update</button>
        <button>remove</button>
        </li>
      </div>
    );
  });

  return (

    <Fragment>
    <ul className="component-list">
      {basketNodes}
    </ul>
    <h4>Total: </h4>
    <button>Check Out</button>
    </Fragment>

  );
};

export default ShoppingCart;
