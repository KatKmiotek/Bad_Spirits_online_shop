import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props)=> {
  return (
    <header>
    <div className="navbar-start">
    <Link to="/home" className="navLink">
    Home
    </Link>
    <Link to="/products" className="navLink">
    All Products
    </Link>
    <Link to="/products/beers" className="navLink">
    Beers
    </Link>
    <Link to="/products/wines" className="navLink">
    Wines
    </Link>
    <Link to="/products/gins" className="navLink">
    Gins
    </Link>
    <Link to="/products/rums" className="navLink">
    Rums
    </Link>

<div className="navbar-end">
    <Link to="/shoppingCart" className="navLink">
    Basket
    <p>  ({props.shoppingCart.length} items)</p>
    </Link>
    </div>
    </div>
    </header>
  );
};

export default NavBar;
// <img src={require('./basket.svg')} alt="basket logo" heigth="10"/>
