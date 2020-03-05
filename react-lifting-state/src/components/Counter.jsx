import React from 'react';

const Counter = props => {
  const increment = () => {
    props.onCountChange(props.value + 1);
  };

  return (
    <div>
      <span>{props.value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
