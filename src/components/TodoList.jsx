import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos } = props;
  const tab = "Completadas";
  const filterTodosList =
    tab === "Todas"
      ? todos
      : tab === "Completadas"
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
