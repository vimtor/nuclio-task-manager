import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState(["Do dishes", "Buy milk"]);

  useEffect(() => {
    document.title = `${tasks.length} tasks remaining`;
  }, [tasks]);

  useEffect(() => {
    if (tasks.length === 0) {
      alert("You completed all tasks!");
    }
  }, [tasks]);

  return (
    <div>
      <h1>Todo List</h1>
      <p>Pending tasks: {tasks.length}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTasks([title, ...tasks]);
          setTitle("");
        }}
      >
        <input
          value={title}
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => {
          return (
            <li
              onClick={() => {
                setTasks(tasks.filter((t) => t !== task));
              }}
            >
              {task}
            </li>
          );
        })}
      </ul>
      {tasks.length > 0 ? (
        <button
          onClick={() => {
            setTasks([]);
          }}
        >
          Complete all tasks
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}

export default App;
