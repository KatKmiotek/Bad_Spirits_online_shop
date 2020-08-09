import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({products})=> {

  return (
<div className="columns">
<div className="column is-one-quarter"></div>
<div className="column is-two-quarter">
    <div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
    <Link to="products/beers">
      <p class="title">Beers</p>
      <img src={require('../beers.jpg')} alt="beers"/>
      </Link>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
    <Link to="products/rums">
      <p class="title">Rums</p>
      <img src={require('../rums.jpg')} alt="rums"/>
      </Link>
    </article>
  </div>
  </div>
  <div class="tile is-ancestor">
<div class="tile is-parent">
  <article class="tile is-child box">
  <Link to="products/gins">
    <p class="title">Gins</p>
    <img src={require('../gins.jpg')}alt="gins"/>
    </Link>
  </article>
</div>
<div class="tile is-parent">
  <article class="tile is-child box">
  <Link to="products/wines">
    <p class="title">Wines</p>
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
