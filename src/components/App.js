import React, { Component } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Cards from './Cards';
import Bio from './Bio';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <Cards />
        <Bio />
      </div>
    );
  }
}

export default App;
