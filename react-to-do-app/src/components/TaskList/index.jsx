import React from 'react';

const TaskList = props => {
  return (
    <ul>
      {props.tasks.map(task => (
        <li key={task.id}>{task.content}</li>
      ))}
    </ul>
  );
};

export default TaskList;
