function TodoCard(props) {
  const { todo, handleDeleteTodo, handleCompleteTodo, todoIndex } = props;

  return (
    <div>
      <p>{todo.input}</p>
      <div>
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          <h6>Hecha ✔</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Borrar</h6>
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
