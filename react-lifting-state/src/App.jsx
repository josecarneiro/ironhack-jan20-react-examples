import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  handleCountChange(value) {
    ++this.state.count;
    // this.state.count++;
    // this.state.count = this.state.count + 1;
    this.setState({
      count: value
    });
  }

  render() {
    return (
      <div className="App">
        <Counter value={this.state.count} onCountChange={this.handleCountChange} />
        <Counter value={this.state.count} onCountChange={this.handleCountChange} />
      </div>
    );
  }
}

export default App;
