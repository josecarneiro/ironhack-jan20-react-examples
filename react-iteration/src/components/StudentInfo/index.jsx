import React from 'react';
import './style.scss';

const StudentInfo = props => {
  return (
    <div className="student-info">
      <span>
        <strong>{props.name}</strong> {props.age}
      </span>
    </div>
  );
};

export default StudentInfo;
