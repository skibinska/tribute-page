import React, { Component } from 'react';

class Bio extends Component {
  render () {
    return (
      <div className="container cards">

        <div className="row">

          <div className="col-xs-3">
            <div className="well">
              <p className="text-center">
                 She was the first woman to win a Nobel Prize, the first person and only woman to win twice.
              </p>
            </div>
          </div>

          <div className="col-xs-3">
            <div className="well">
              <p className="text-center">
              She was the only person to win a Nobel Prize in two different sciences.
              </p>
            </div>
          </div>

          <div className="col-xs-3">
            <div className="well">
              <p className="text-center">
                She was also the first woman to become a professor at the University of Paris.
              </p>
            </div>
          </div>

          <div className="col-xs-3">
            <div className="well">
              <p className="text-center">
              She became the first woman to be entombed on her own merits in the Panthéon in Paris.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Bio;
