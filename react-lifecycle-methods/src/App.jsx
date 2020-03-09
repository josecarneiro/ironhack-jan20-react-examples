import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      counterIsActive: false
    };
    this.handleCountChange = this.handleCountChange.bind(this);
    this.toggleCounter = this.toggleCounter.bind(this);
  }

  handleCountChange(value) {
    ++this.state.count;
    // this.state.count++;
    // this.state.count = this.state.count + 1;
    this.setState({
      count: value
    });
  }

  toggleCounter() {
    this.setState(previousState => ({
      counterIsActive: !previousState.counterIsActive
    }));
  }

  componentDidCatch(error) {
    console.log('There was an uncaught error thrown in the component');
    console.log(error);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleCounter}>Toggle</button>
        {this.state.counterIsActive && (
          <Counter value={this.state.count} onCountChange={this.handleCountChange} />
        )}
      </div>
    );
  }
}

export default App;
