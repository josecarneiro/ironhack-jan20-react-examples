import React from 'react';
import './style.scss';

const TaskList = props => {
  return (
    <ul className="task__list">
      {props.tasks.map(task => (
        <li key={task._id} className="task__item">
          {task.content}
          <button onClick={() => props.removeTask(task._id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
