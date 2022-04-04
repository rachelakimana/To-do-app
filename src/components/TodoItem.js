import React from "react";

const Todo = () => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>Task 1</h1>
        <span>description</span>
      </div>
      <div className="Card--button">
        <button className="Card--button__done">Complete</button>
        <button className="Card--button__delete">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
