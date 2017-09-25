import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Explorer extends Component {

  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">

        <div className="col-lg-3 tiles">
          <div className="thumbnail">
            <img src="./images/trooper.jpg" alt="..."/>
            <div className="caption">
              <h3>People</h3>
              <hr/>
                {/*
                  Add Link to '/people/'
                  */}
            </div>
          </div>

        </div>
        <div className="col-lg-3  tiles">
          <div className="thumbnail">
            <img src="./images/falcon.jpg" alt="..."/>
            <div className="caption">
              <h3>Starships</h3>
              <hr/>
              {/*
                Add Link to '/starships/'
                */}
            </div>
          </div>

        </div>
        <div className="col-lg-3  tiles">
          <div className="thumbnail">
            <img src="./images/films.jpg" alt="..."/>
            <div className="caption">
              <h3>Films</h3>
              <hr/>
                {/*
                  Add Link to '/films/'
                  */}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Explorer;
