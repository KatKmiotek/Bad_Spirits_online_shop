import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'; //install react-markdown!
import contact from './cbout.md';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = { contact: null };
  }

  componentWillMount() {
    fetch(contact).then((response) => response.text()).then((text) => {
      this.setState({ contact: text });
    });
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.contact} />
      </div>
    );
  }
}

export default Contact;
