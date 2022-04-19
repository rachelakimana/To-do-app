const Todolist = (props) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>{props.name}</h1>
        <span>{props.description}</span>
      </div>
      <div className="Card--button">
        <button className="Card--button__done">Complete</button>
        <button className="Card--button__delete">Delete</button>
      </div>
    </div>
  );
};

export default Todolist;
