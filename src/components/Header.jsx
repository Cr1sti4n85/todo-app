function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;

  const isTasksPlural = todos.length !== 1;
  return (
    <header>
      {isTasksPlural ? (
        <h1 className="text-gradient">
          Tienes {todosLength} tareas pendientes
        </h1>
      ) : (
        <h1 className="text-gradient">Tienes {todosLength} tarea pendiente</h1>
      )}
    </header>
  );
}

export default Header;
