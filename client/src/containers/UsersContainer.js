import React, { Component, Fragment } from 'react';
import Request from '../helpers/Request.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class UsersContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }
  // componentDidMount() {
  //   const request = new Request();
  //   request.get('http://localhost:8080/api/users')
  //   .then(data => {
  //     this.setState({ users: data });
  //   });
  // }
  render(){
    return(
      <Fragment></Fragment>
    )
  }

}
export default UsersContainer;
