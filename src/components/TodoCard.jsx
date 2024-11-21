function TodoCard(props) {
  const { todo } = props;

  return (
    <div>
      <p>{todo.input}</p>
      <div>
        <button disabled={todo.complete}>
          <h6>Hecha ✔</h6>
        </button>
        <button>
          <h6>Borrar</h6>
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
