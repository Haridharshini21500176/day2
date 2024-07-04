import React from 'react';

const TodoItem = ({ index, task, editTask, removeTask, toggleCompletion }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => toggleCompletion(index)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => editTask(index)}>Edit</button>
        <button onClick={() => removeTask(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
