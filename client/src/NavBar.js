import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ()=> {
  return (
    <header>
    <ul>
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
    <Link to="products/rums" className="navLink">
    Rums
    </Link>

    </ul>
    </header>
  );
};

export default NavBar;
