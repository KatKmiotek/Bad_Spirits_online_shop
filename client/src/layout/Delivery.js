import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'; //install react-markdown!
import delivery from './delivery.md';

class Delivery extends Component {
  constructor(props) {
    super(props);

    this.state = { delivery: null };
  }

  componentWillMount() {
    fetch(delivery).then((response) => response.text()).then((text) => {
      this.setState({ delivery: text });
    });
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.delivery} />
      </div>
    );
  }
}

export default Delivery;
