import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import AppComponent from './App';

// const cars = require('./data/cars');

// import carsArray from './data/cars';

// const { raceHorses } = require('./data/horses');
// const raceHorses = require('./data/horses').raceHorses;
// const allHorses = require('./data/horses');
// const raceHorses = allHorses.raceHorses;

// import { raceHorses, pettingHorses } from './data/horses';
// import allHorses from './data/horses'; // Would not work
// import * as allHorses from './data/horses';
// import { raceHorses as raceHorsesArray, pettingHorses as pettingHorsesArray } from './data/horses';

ReactDOM.render(<AppComponent />, document.getElementById('root'));
