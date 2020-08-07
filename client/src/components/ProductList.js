import React, { Component, Fragment } from 'react';
import Product from "./Product.js";

const ProductList = (props) => {

    const productNodes = props.products.map((product, index) => {
      return (
        <div key={index}>
          <Product product={product} />
        </div>
      )
    })

    return (

      <Fragment>
      {productNodes}
      </Fragment>

    );
}
export default ProductList;
