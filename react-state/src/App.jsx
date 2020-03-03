import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // this.count = 10;
    this.state = {
      count: 20
    };
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
  }

  handleIncrementClick() {
    // We cannot mutate state directly
    // this.state.count++;
    // We need to call setState,
    // otherwise React is not aware that the state changed

    // We can pass setState an object with the props
    // that should be merged into the state
    // this.setState({
    //   count: this.state.count + 1
    // });

    // Or pass it a function that returns an object
    // that should be merged into the state
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      };
    });
  }

  render() {
    return (
      <div className="App">
        <span>Count: {this.state.count}</span>
        <button onClick={this.handleIncrementClick}>+</button>
      </div>
    );
  }
}

export default App;
