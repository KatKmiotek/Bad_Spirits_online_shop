import React, {Fragment } from 'react';
import Product from './Product.js';
import SearchBar from './SearchBar.js'

const ProductList = (props) => {

    const productNodes = props.products.map((product, index) => {
      return (
        <div className="component" key={index}>
          <Product product={product} addToCart={handlePassToMain}/>
        </div>
      );
    });

    function handlePassToMain(product) {
      props.addToCart(product);
    }

    return (

      <Fragment>
      <SearchBar/>
      <ul className="component-list">
        {productNodes}
      </ul>
      </Fragment>

    );
  };

export default ProductList;
