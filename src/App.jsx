import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Pendientes");

  const [todos, setTodos] = useState([
    { input: "Hola, añade tu primera tarea", complete: true },
  ]);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList todos={todos} selectedTab={selectedTab} />
      <TodoInput handleAdd={handleAddTodo} />
    </>
  );
}

export default App;
