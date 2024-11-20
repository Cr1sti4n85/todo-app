import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos } = props;
  const tab = "Todas";
  return (
    <>
      {todos.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />;
      })}
    </>
  );
}

export default TodoList;
