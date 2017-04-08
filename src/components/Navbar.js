import React, { Component } from 'react';

class Navbar extends Component {
  render () {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
