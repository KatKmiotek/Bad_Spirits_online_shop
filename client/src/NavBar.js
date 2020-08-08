import React from 'react';

const NavBar = ()=> {
  return (
    <header>
    <ul>
    <li className="navLink">
    <a href="/home">Home</a>
    </li>
    <li className="navLink">
    <a href="/products">All Products</a>
    </li>
    <li className="navLink">
    <a href="/products/beers" >Beers</a>
    </li>
    <li className="navLink">
    <a href="/products/wines">Wines</a>
    </li>
    <li className="navLink">
    <a href="/products/gins">Gins</a>
    </li>
    <li className="navLink">
    <a href="/products/rums">Rums</a>
    </li>

    </ul>
    </header>
  );
};

export default NavBar;
