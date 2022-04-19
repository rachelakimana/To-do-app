import "./App.css";
import RenderCard from "./components//RenderTodo";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

const App = () => {
  const [productsArr, setProductsArr] = useState([]);

  const dataRecevedHandler = (produits) => {
    console.log(produits);
    setProductsArr((prevPro) => {
      return [produits, ...prevPro];
    });
  };

  console.log(productsArr);
  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo onDataSaved={dataRecevedHandler} />

      <RenderCard arrayItems={productsArr} />
    </main>
  );
};

export default App;
