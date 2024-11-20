import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div>
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
