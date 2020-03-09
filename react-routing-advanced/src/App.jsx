import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';

import FirstPageView from './views/FirstPage';
import SecondPageView from './views/SecondPage';
import PrivatePageView from './views/PrivatePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'José',
        age: 26
      }
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar color="dark" />
          <Switch>
            {/* <Route path="/private" exact component={PrivatePageView} /> */}
            <Route
              path="/private"
              exact
              render={props => <PrivatePageView user={this.state.user} {...props} />}
            />
            <Route path="/second/:name" exact component={SecondPageView} />
            <Route path="/" exact component={FirstPageView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
