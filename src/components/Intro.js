import React, { Component } from 'react';

class Intro extends Component {
  render () {
    return (
      <div className="container main">
      <h1 className="text-center title"><em>Radioactive Woman</em></h1>
        <div className="row">
          <div className="col-xs-6">
            <img
              className="img-responsive center-block"
              src="./src/assets/sklodowska-face.jpg"
              alt="Maria Sklodowska Curie"/>
          </div>
          <div className="col-xs-6">
            <h2 className="text-center">Maria Sklodowska Curie</h2>
            <h3 className="text-center"><em>1867-1934</em></h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
