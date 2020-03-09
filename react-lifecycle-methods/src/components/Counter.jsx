import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('Component was constructed');
    // setTimeout(() => {
    //   throw new Error();
    // }, 5000);
  }

  componentDidMount() {
    console.log('Component was mounted');
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('Component was updated');
    console.log(previousProps, this.props);
    // console.log('Value prop changed');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('Component was rendered');

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
