import React, {Component} from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<

export default class BaseLayout extends Component {
  render(){
    let headerStyle = {
      "textAlign": "center",
      "height": "35vw",
      "color": "#fff",
      "backgroundImage": "url(./images/space.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  {/* Add a NavLink set to the home page. Set the activeStyle to a color of yellow */}
                </li>
                <li>
                  {/* Add a NavLink set to characters. Include activeClassName */}
                </li>
                <li>
                  {/* Add a NavLink set to starships. Include activeClassName */}
                </li>
                <li>
                  {/* Add a NavLink set to films. Include activeClassName */}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 header" style={headerStyle}>
            <div className="starwars">
              <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" />
              <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars"/>
              <h2 className="byline" id="byline">api explorer</h2>
            </div>
          </div>
        </nav>
        {/*
          PASS IN CHILDREN
          */}
        {this.props.children}
        <footer className="col-lg-12">
          <span>
            SWAPI EXPLORER
          </span>
        </footer>
      </div>
    );
  }
}
