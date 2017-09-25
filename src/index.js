import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import BaseLayout from './components/Layout';
import View from './components/Details';
import Explorer from './components/Explorer';
import Films from './components/Films';
import People from './components/People';
import Starships from './components/Starships';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Explorer}/>
        <Route exact path="/details/:endpoint/:id" component={View}/>
        <Route exact path="/characters" component={People}/>
        <Route exact path="/starships" component={Starships}/>
        <Route exact path="/films" component={Films}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>



,document.getElementById('root'));
registerServiceWorker();
