import React from "react";
import Todo from "./modules/Todo";
import "./App.css";
import TodosList from "./components/TodosList";

let todos = [new Todo("Typescript Practice")];

function App() {
  return (
    <div className="App">
      <TodosList items={todos} />
    </div>
  );
}

export default App;
