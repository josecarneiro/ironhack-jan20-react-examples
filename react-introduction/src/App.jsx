import React from 'react';

import './App.scss';

import AppMessage from './AppMessage';
import AppAlternativeMessage from './AppAlternativeMessage';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AppMessage />
        <AppAlternativeMessage />
        <AppMessage />
        <AppMessage />
        <AppMessage />
        <AppMessage />
      </header>
    </div>
  );
};

export default App;
