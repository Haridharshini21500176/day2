import React, { useState } from 'react';
import './toodo.css';
import TodoItem from './toodItem';
import styled, { keyframes } from 'styled-components';


const animateBackground = keyframes`
  0% {
    background-color: Cyan;
  }
  50% {
    background-color: Sweet Green;
  }
  100% {
    background-color: Cyan;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  width: 180vh;
  background-color: Beige; /* Initial background color */
  animation: ${animateBackground} 5s ease infinite; /* Apply background animation */
  font-family: Arial, sans-serif;
`;

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(-1);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const editTask = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setNewTask(tasks[index].text);
  };

  const updateTask = () => {
    if (currentTaskIndex !== -1 && newTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[currentTaskIndex].text = newTask;
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentTaskIndex(-1);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <Container>
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <div className="add-task-container">
        <input
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {isEditing ? (
          <button onClick={updateTask}>Update Task</button>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task}
            editTask={editTask}
            removeTask={removeTask}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
    </div>
    </Container>
  );

};

export default TodoList;
