import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos, selectedTab } = props;
  const filterTodosList =
    selectedTab === "Todas"
      ? todos
      : selectedTab === "Completadas"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} />;
      })}
    </>
  );
}

export default TodoList;
