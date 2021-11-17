import React from 'react';

const Overview = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
      })}
    </ul>
  );
};

export default Overview;