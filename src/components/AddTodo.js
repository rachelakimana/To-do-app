import nextId from "react-id-generator";
import { useState } from "react";

const AddTodo = (props) => {
  const [name, setName] = useState(" ");
  const [description, setDescription] = useState(" ");

  const taskNameHandler = (e) => {
    setName(e.target.value);
  };
  const taskdescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    props.onDataSaved({
      id: nextId(),
      name: name,
      description: description,
    });

    setName("");
    setDescription("");
  };
  return (
    <form className="Form">
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={taskNameHandler}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            required
            onChange={taskdescriptionHandler}
            value={description}
          />
        </div>
      </div>
      <button type="submit" onClick={addTaskHandler}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
