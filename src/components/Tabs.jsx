function Tabs(props) {
  const { todos } = props;
  const tabs = ["Todas", "Pendientes", "Completadas"];
  return (
    <nav>
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "Todas"
            ? todos.length
            : tab === "Pendientes"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;
        return (
          <button key={tabIndex}>
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}

export default Tabs;
