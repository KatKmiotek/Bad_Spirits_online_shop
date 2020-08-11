import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props)=> {
  return (
    <nav className="nav-bar">

    <Link to="/home">
    <img src={require('./badSpiritsLogo.png')} alt="logo" className="logo"/>
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
    <Link to="/search" className="navLink">
    <i className="fa fa-search" aria-hidden="true"></i>Search
    </Link>


    <Link to="/shoppingCart" className="navLink">
    <i className="fa fa-shopping-basket" aria-hidden="true"> {props.shoppingCart.length} items</i>
    </Link>


    </nav>
  );
};

export default NavBar;
// <img src={require('./basket.svg')} alt="basket logo" heigth="10"/>
