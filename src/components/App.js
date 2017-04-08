import React, { Component } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default App;
