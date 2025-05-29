import React from 'react';
import { useParams } from 'react-router-dom';
import tasks from '../tasks';
import '../App.css';

const TaskDetail = () => {
  const { id } = useParams(); // Extract the task ID from the URL
  const task= tasks.find((t) => t.id === id); // Find the task using the ID

  return (
    <div className="task-detail">
      {task ? (
        <>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </>
      ) : (
        <p className="error">Task not found. Please check the task ID.</p>
      )}
    </div>
  );
};

export default TaskDetail;