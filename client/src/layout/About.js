import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'; //install react-markdown!
import about from './about.md';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = { about: null };
  }

  componentWillMount() {
    fetch(about).then((response) => response.text()).then((text) => {
      this.setState({ about: text });
    });
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.about} />
      </div>
    );
  }
}

export default About;
