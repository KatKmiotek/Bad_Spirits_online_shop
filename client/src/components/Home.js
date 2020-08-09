import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({products})=> {

  return (
<div className="columns">
<div className="column is-one-quarter"></div>
<div className="column is-two-quarter">
    <div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child box">
    <Link to="products/beers">
      <p className="title">Beers</p>
      <img src={require('../beers.jpg')} alt="beers"/>
      </Link>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
    <Link to="products/rums">
      <p className="title">Rums</p>
      <img src={require('../rums.jpg')} alt="rums"/>
      </Link>
    </article>
  </div>
  </div>
  <div className="tile is-ancestor">
<div className="tile is-parent">
  <article className="tile is-child box">
  <Link to="products/gins">
    <p className="title">Gins</p>
    <img src={require('../gins.jpg')}alt="gins"/>
    </Link>
  </article>
</div>
<div className="tile is-parent">
  <article className="tile is-child box">
  <Link to="products/wines">
    <p className="title">Wines</p>
    <img src={require('../wines.jpg')} alt="wines"/>
    </Link>
  </article>
  </div>
</div>
  </div>
  <div className="column is-one-quarter"></div>
</div>

  );
};

export default Home;
