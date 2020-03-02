import React from 'react';
import logo from './logo.svg';

const AppMessage = () => {
  // ...
  const message = 'Hello World';

  return (
    <div>
      <img src={logo} />
      <p>{message}</p>
    </div>
  );
};

export default AppMessage;
