import "./App.css";
import Todo from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo />

      <Todo />
    </main>
  );
};

export default App;
