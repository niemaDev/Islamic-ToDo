import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const addTask = () => {
    if (!newTaskTitle || !newTaskDate) {
      setError("Please enter both task title and date!");
      return;
    }

    setTasks([
      ...tasks,
      { title: newTaskTitle, dueDate: newTaskDate, completed: false },
    ]);
    setNewTaskTitle("");
    setNewTaskDate("");
    setError("");
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const allComplete = tasks.length > 0 && tasks.every((t) => t.completed);

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="container">
        <h1 className="title">Welcome to My Islamic To-Do App</h1>
        <div className="task-form">
          <input
            type="text"
            placeholder="Task Title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <input
            type="date"
            value={newTaskDate}
            onChange={(e) => setNewTaskDate(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        {error && <p className="error">{error}</p>}
        <TaskList tasks={tasks} toggleComplete={toggleComplete} />
        {allComplete && (
          <p className="motivation"> Keep up the good work! </p>
        )}
      </div>
    </div>
  );
}

export default App;
