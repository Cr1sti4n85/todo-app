import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";

function App() {
  const todos = [
    { input: "Hola, añade tu primera tarea", complete: true },
    { input: "Ir a comprar frutas", complete: false },
    { input: "Aprender docker", complete: false },
    { input: "Llamar al abuelo", complete: true },
  ];

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  );
}

export default App;
