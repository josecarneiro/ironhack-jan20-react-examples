import React from 'react';
import './App.css';

import CohortInfo from './components/CohortInfo';
import StudentInfo from './components/StudentInfo';

function App() {
  return (
    <div className="App">
      <CohortInfo date={new Date(2019, 9, 21)}>
        <StudentInfo name="Becca" age={25} />
        <StudentInfo name="Santi" age={25} />
      </CohortInfo>

      <CohortInfo date={new Date(2020, 0, 20)}>
        <StudentInfo name="António" age={26} />
        <StudentInfo name="Ana" age={27} />
      </CohortInfo>
    </div>
  );
}

export default App;

// How node resolves files
// By writing this
// ./components/StudentInfo
// Node looks for this
// ./components/StudentInfo.js
// ./components/StudentInfo.jsx
// ./components/StudentInfo/index.js
// ./components/StudentInfo/index.jsx
