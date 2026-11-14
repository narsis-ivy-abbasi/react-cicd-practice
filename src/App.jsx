import { useState } from "react";
import "./App.css";

function App() {
  const testValue = "CI Error Test";
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Learn GitHub", completed: false },
    { id: 3, title: "Setup CI/CD", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <main className="app">
      <h1>Daily Tasks</h1>
      <p>Manage your daily activities</p>

      <div className="task-form">
        <input
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Enter a new task..."
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? "completed" : ""}>
                {task.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
