import React from 'react';
import tasks from '../tasks';
import '../App.css';

const TaskList = () => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <a href={`/task/${task.id}`}>
            <h3>{task.title}</h3>
          </a>
       
        </div>
      ))}
    </div>
  );
};

export default TaskList;