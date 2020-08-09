import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props)=> {
  return (
    <header>
    <ul>
    <Link to="/home" className="navLink">
    Home
    </Link>
<<<<<<< HEAD
    <p></p>
=======
>>>>>>> develop
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
<<<<<<< HEAD
    <Link to="/shoppingCart" className="navLink">
    <img src={require('./basket.svg')} alt="basket logo" heigth="200"/>
        <p>  ({props.shoppingCart.length} items)</p>
    </Link>
=======
>>>>>>> develop

    </ul>
    </header>
  );
};

export default NavBar;

// import React from 'react';
// import {Link} from 'react-router-dom';
//
// const NavBar = (props)=> {
//   return (
//
// <header>
//     <ul>
//
//     <Link href="/home">Home</a>
//
//
//     <a href="/products">All Products</a>
//
//     <a href="/products/beers" >Beers</a>
//
//     <a href="/products/wines">Wines</a>
//
//     <a href="/products/gins">Gins</a>
//
//     <a href="/products/rums">Rums</a>
//     </li>
//     <li className="navLink">
//     <a href="/shoppingCart"><img src={require('./basket.svg')} alt="basket logo" heigth="200"/></a>
//     <p>  ({props.shoppingCart.length} items)</p>
//     </li>
//
//     </ul>
//     </header>
//   );
// };
//
// export default NavBar;
