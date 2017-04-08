import React, { Component } from 'react';

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
