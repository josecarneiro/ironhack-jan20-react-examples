// import React from 'react';
// import { Component } from 'react';
import React, { Component } from 'react';

// const Component = React.Component;
// const { Component } = React;

import StudentInfo from './../StudentInfo';

class CohortInfo extends Component {
  render() {
    const { date, students } = this.props;
    return (
      <div>
        <strong>{date.toDateString()}</strong>
        <h3>Students</h3>
        {students.map(student => (
          <StudentInfo key={student.name} name={student.name} age={student.age} />
        ))}
      </div>
    );
  }
}

export default CohortInfo;
