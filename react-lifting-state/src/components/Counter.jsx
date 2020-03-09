import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('Component was constructed');
  }

  render() {
    const increment = () => {
      this.props.onCountChange(this.props.value + 1);
    };

    return (
      <div>
        <span>{this.props.value}</span>
        <button onClick={increment}>+</button>
      </div>
    );
  }
}

export default Counter;
