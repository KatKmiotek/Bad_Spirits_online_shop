import React, { Fragment } from 'react';

const ShoppingCart = ({basket})=> {


  const basketNodes = basket.map((product, index) => {
    return (
      <div className="component" key={index}>
        <li>

        <p>{product.name}</p>
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
