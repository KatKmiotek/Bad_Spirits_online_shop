import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props)=> {
  return (
    <nav className="nav-bar">

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
    <Link to="/search" className="navLink">
    <i className="nav-icon fa fa-search" aria-hidden="true"></i> Search
    </Link>


    <Link to="/shoppingCart" className="navLink">
    <i className="nav-icon fa fa-shopping-basket" aria-hidden="true"> {props.shoppingCart.length}</i> items
    </Link>


    </nav>
  );
};

export default NavBar;
// <img src={require('./basket.svg')} alt="basket logo" heigth="10"/>
