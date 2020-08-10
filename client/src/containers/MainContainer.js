import React, { Component, Fragment } from 'react';
import Request from '../helpers/Request.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../components/Home.js';
import ProductList from '../components/ProductList.js';
import ProductDetail from '../components/ProductDetail.js';
import ShoppingCart from '../components/ShoppingCart.js';
import SearchBar from '../components/SearchBar.js'

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('http://localhost:8080/api/products')
    .then(data => {
      this.setState({ products: data });
    });
  }

  findProductById(id) {
    return this.state.products.find(product => {return product.id === parseInt(id);});
  }

  getProductyByCategory(category) {
    return this.state.products.filter(product => product.category === category);
  }

  handleAddToCart(product){

    const newCart = [...this.state.cart, product];
    this.setState({ cart: newCart });
  }
  //1
  handleRemove(product){
    console.log('Hello from handle remove', product);
    const newCart = this.state.cart.pop(product);
    console.log('cart', newCart);
    this.setState({ cart: newCart});
  }
  //2
  // handleRemove(product) {
  //   const list = this.state.cart;
  //   list.some((el, i) => {
  //     if (el === product) {
  //       list.splice(i, 1);
  //       return true;
  //     }
  //     return
  //   });
  //   console.log('list', list);
  //   this.setState({
  //
  //     list: list
  //   });
  // }

  render () {
    return (

<Router >
      <Fragment>
      <NavBar shoppingCart={this.state.cart}/>
      <Switch>
      <Route path='/home' render={()=> {
          return <Home products={this.state.products}/>;
        }}/>
      <Route path='/products/beers' render={()=> {
          const products = this.getProductyByCategory('BEER');
          return <ProductList products={products} addToCart={this.handleAddToCart}/>;
        }}/>
      <Route path='/products/wines' render={()=> {
          const products = this.getProductyByCategory('WINE');
          return <ProductList products={products} addToCart={this.handleAddToCart}/>;
        }}/>
      <Route path='/products/gins' render={()=> {
          const products = this.getProductyByCategory('GIN');
          return <ProductList products={products} addToCart={this.handleAddToCart}/>;
        }}/>
      <Route path='/products/rums' render={()=> {
          const products = this.getProductyByCategory('RUM');
          return <ProductList products={products} addToCart={this.handleAddToCart}/>;
        }}/>
      <Route exact path='/products/:id' render={(props)=> {
        const id = props.match.params.id;
        const product = this.findProductById(id);
        return <ProductDetail product={product} addToCart={this.handleAddToCart}/>;
      }}/>
      <Route path='/products' render={()=> {
        return <ProductList products={this.state.products} addToCart={this.handleAddToCart}/>;
      }}/>
      <Route path="/shoppingCart" render={()=> {
        return <ShoppingCart basket={this.state.cart} removeFromCart={this.handleRemove}/>;
      }}/>
      <Route path="/search" render={()=> {
        return <SearchBar products={this.state.products}/>;
      }}/>
      <Route path="/checkout" render={()=> {
        return <p></p>;
      }}/>

      </Switch>

      </Fragment>
      </Router>
    );
  }
}

export default MainContainer;
