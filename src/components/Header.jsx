function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;

  const isTasksPlural = todos.length !== 1;
  const taskOrTasks = isTasksPlural ? "tareas" : "tarea";
  return (
    <header>
      <h1 className="text-gradient">
        Tienes un total de {todosLength} {taskOrTasks} en tu lista
      </h1>
    </header>
  );
}

export default Header;
