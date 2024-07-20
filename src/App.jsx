import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // create a arry of objects
  const todoItems = [
    { name: "buy milk", dueDate: "14/12/2024" },

    { name: "go to school", dueDate: "30/09/2024" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
