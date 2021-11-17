import React, { useState } from 'react';
import styled from 'styled-components';
import Overview from './Overview';
import uniqid from 'uniqid';

const StyledMain = styled.div`
  border: 1px solid black;
  padding: 15px;
  width: 400px;

  form {
    display: flex;
    justify-content: space-around;
  }
`;

const Main = () => {
  const [task, setTask] = useState({
      text: '',
      id: uniqid()
    });
  const [taskList, setTaskList] = useState([]);

  const handleTextChange = (e) => {
    setTask({
      text: e.target.value, 
      id: task.id
    });
  }

  const onSubmitTask = (e) => {
    e.preventDefault();
    setTaskList(taskList.concat(task));
    setTask({
      text: '', 
      id: uniqid()
    });
  }

  return (
    <StyledMain>
      <form onSubmit={onSubmitTask}>
        <label htmlFor="taskInput">Enter task:</label>
        <input type="text" id="taskInput" value={task.text} onChange={handleTextChange} />
        <button type="submit">Add Task</button>
      </form>
      <Overview tasks={taskList} />
    </StyledMain>
  )
}

export default Main;