import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class View extends Component {
  render() {
    // We use conditional rendering for each category based on API endpoint.
    if (this.props.endpoint === 'films') {
      let film = this.props.details;
      return (
        <div className="col-lg-8 col-lg-offset-2 card">
          <div className="profile">
            <i className="fa fa-film" aria-hidden="true"></i>
            <h3 className="headings">
              {film.title}
            </h3>
            <hr/>
            <h4 className="sub-headings">Details</h4>
            <dl className="dl-horizontal">
              <dt>Opening</dt>
              <dd>{film.opening_crawl}</dd>
              <dt>Director</dt>
              <dd>{film.director}</dd>
              <dt>Producer</dt>
              <dd>{film.producer}</dd>
              <dt>Episode</dt>
              <dd>{film.episode_id}</dd>
              <dt>Release</dt>
              <dd>{film.release_date}</dd>
            </dl>
          </div>
        </div>
      )
    } else if (this.props.endpoint === "people") {
      let character = this.props.details;
      return (
        <div className="col-lg-8 col-lg-offset-2 card">
          <div className="profile">
          <i className="fa fa-user" aria-hidden="true"></i>
            <h3 className="headings">
              {character.name}
            </h3>
            <hr/>
            <h4 className="sub-headings">Details</h4>
            <dl className="dl-horizontal">
              <dt>Birth Year</dt>
              <dd>{character.birth_year}</dd>
              <dt>Gender</dt>
              <dd>{character.gender}</dd>
              <dt>Mass</dt>
              <dd>{character.mass}</dd>
              <dt>Height</dt>
              <dd>{character.height}</dd>
              <dt>Eye Color</dt>
              <dd>{character.eye_color}</dd>
              <dt>Hair Color</dt>
              <dd>{character.hair_color}</dd>
            </dl>
          </div>
        </div>
      )
    } else if (this.props.endpoint === "starships") {
      let starship = this.props.details;
      return (
        <div className="col-lg-8 col-lg-offset-2 card">
          <div className="profile">
            <i className="fa fa-space-shuttle" aria-hidden="true"></i>
            <h3 className="headings">
              {starship.name}
            </h3>
            <hr/>
            <h4 className="sub-headings">Details</h4>
            <dl className="dl-horizontal">
              <dt>MGLT</dt>
              <dd>{starship.MGLT}</dd>
              <dt>Manufacturer</dt>
              <dd>{starship.manufacturer}</dd>
              <dt>Model</dt>
              <dd>{starship.model}</dd>
              <dt>Class</dt>
              <dd>{starship.starship_class}</dd>
              <dt>Cargo</dt>
              <dd>{starship.cargo_capacity}</dd>
              <dt>Length</dt>
              <dd>{starship.length}</dd>
            </dl>
          </div>
        </div>
      )
    } else {
      return (
        <div className="loader"></div>
      )
    }
  }
}

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'details': {},
      'endpoint': ''
    }
  }

  componentDidMount() {
    {/*
      Create an 'endpoint' variable set to the 'endpoint' property found in the params.
      Create an 'id' variable set to the 'id' property found in the params.
      Create a 'url' variable set to 'https://swapi.com/api/', plus the two variables from above.
      Fetch
      Set state for both 'details' (for rendering endpoint data) and 'endpoint' (to set conditional rendering)
      */}
  }

  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
              <h1>Category: {this.props.match.params.endpoint}</h1>
          </div>
          {/*
            Pass the following props to View: details and endpoint.
            */}
          <View/>
        </div>
      </div>
    );
  }
}

export default Details;
