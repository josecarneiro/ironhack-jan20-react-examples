import React from 'react';
import './App.css';

import CohortInfo from './components/CohortInfo';
import StudentInfo from './components/StudentInfo';

const cohorts = [
  {
    id: 'try',
    date: new Date(2019, 9, 21),
    students: [
      { id: 'abc', name: 'Santi', age: 25 },
      { id: 'def', name: 'Becca', age: 25 }
    ]
  },
  {
    id: 'cst',
    date: new Date(2020, 0, 20),
    students: [
      { id: 'ghi', name: 'António', age: 26 },
      { id: 'cde', name: 'Ana', age: 27 }
    ]
  }
];

function App() {
  return (
    <div className="App">
      {/* {cohorts.map(cohort => (
        <CohortInfo date={cohort.date}>
          {cohort.students.map(student => (
            <StudentInfo name={student.name} age={student.age} />
          ))}
        </CohortInfo>
      ))} */}

      {cohorts.map(cohort => (
        <CohortInfo key={cohort.id} date={cohort.date} students={cohort.students} />
      ))}
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
