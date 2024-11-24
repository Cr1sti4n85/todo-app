import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import { useState, useEffect } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Pendientes");

  const [todos, setTodos] = useState([
    { input: "Hola, añade tu primera tarea", complete: true },
  ]);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;

    newTodoList[index] = completedTodo;

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, valIndex) => valIndex !== index);

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem("todos", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todos")) return;
    let db = JSON.parse(localStorage.getItem("todos"));
    setTodos(db?.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAdd={handleAddTodo} />
    </>
  );
}

export default App;
