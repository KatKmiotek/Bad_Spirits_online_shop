import React, { Component, Fragment } from 'react';
import Request from '../helpers/Request.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../components/Home.js';
import ProductList from '../components/ProductList.js';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const request = new Request();
    request.get('http://localhost:8080/api/products')
    .then(data => {
      this.setState({ products: data });

    });
  }

  render () {
    return (



<Router >
      <Fragment>
      <NavBar/>
      <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/products' render={()=> {
        return <ProductList products={this.state.products}/>;
      }}/>
      </Switch>
      </Fragment>
      </Router>
    );
  }
}

export default MainContainer;
