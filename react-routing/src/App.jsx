import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import FirstPageView from './views/FirstPage';
import SecondPageView from './views/SecondPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/second/jose">José's Profile</Link>
            <Link to="/second/santi">Santi's Profile</Link>
          </nav>
          <Switch>
            <Route path="/second/:name" exact component={SecondPageView} />
            <Route path="/" exact component={FirstPageView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
