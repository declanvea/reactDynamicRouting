import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    console.log('props', this.props.films)
    let data = this.props.films;
    let List = data.map((films) => {
      let url = films.url;
      // We use 'endpoint' to extract the enpoint's 'id from the API url.
      // We will use this in the 'cards' header.
      let endpoint = url.substr(url.lastIndexOf('s/*') - 1, 1);
      let people = films.characters.map((people) => {
        // We use 'endpoint' to extract the enpoint from the API url.
        let endpoint = people.substr(people.indexOf("/api/") + 5);
        return <li className="list-group-item" key={people}>
          {/*
            Add Link to '/details/' + endpoint
            */}
        </li>
      })
      let starships = films.starships.map((starships) => {
        let endpoint = starships.substr(starships.indexOf("/api/") + 5);
        return <li className="list-group-item" key={starships}>
          {/*
            Add Link to '/details/' + endpoint
            */}
        </li>
      })

      return (
        <div key={films.episode_id} className="col-lg-10 col-lg-offset-1 card">
          <div className="col-lg-6">
            <div className="profile">
              <i className="fa fa-film" aria-hidden="true"></i>
              <h3 className="headings">
                {films.title}
              </h3>
              <h4 className="sub-headings">API Endpoint: {endpoint}</h4>
              <hr/>
              <h4 className="sub-headings">Profile</h4>
              <dl className="dl-horizontal">
                <dt>Opening</dt>
                <dd>{films.opening_crawl}</dd>
                <dt>Director</dt>
                <dd>{films.director}</dd>
                <dt>Producer</dt>
                <dd>{films.producer}</dd>
                <dt>Episode</dt>
                <dd>{films.episode_id}</dd>
                <dt>Release</dt>
                <dd>{films.release_date}</dd>
              </dl>
            </div>
          </div>
          <div className="col-lg-3">
            <h4 className="sub-headings">people Endpoint</h4>
            <hr/>
            <ul className="list-group">
              {people}
            </ul>
          </div>
          <div className="col-lg-3">
            <h4 className="sub-headings">Starships Endpoint</h4>
            <hr/>
            <ul className="list-group">
              {starships}
            </ul>
          </div>
        </div>
      )
    })
    return (
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1">
          <h1 className="headings">Films</h1>
          <hr/>
        </div>
        {List}
      </div>
    )
  }
}

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'films': []
    }
  }

  componentDidMount() {
    let url = "https://swapi.co/api/films/";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({films: data.results})
    });
  }

  render() {
    console.log('render', this.state)
    // Your render should consist of the BaseLayout with the following children componenets: Appetizers, Entres, and Dessert.
    // Each component needs to receive state via props.
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <List films={this.state.films}/>
      </div>
    );
  }
}

export default Films;
