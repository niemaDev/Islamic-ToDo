import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import QuoteSection from "../components/QuoteSection";

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTaskTitle || !newTaskDate) {
      setError("⚠️ Please enter both task title and date!");
      return;
    }
    setTasks([...tasks, { title: newTaskTitle, dueDate: newTaskDate, completed: false }]);
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
    <div className="container">
      <QuoteSection />

      <div className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          aria-label="Task title"
        />
        <input
          type="date"
          value={newTaskDate}
          onChange={(e) => setNewTaskDate(e.target.value)}
          aria-label="Task due date"
        />
        <button onClick={addTask} aria-label="Add new task">Add Task</button>
      </div>

      {error && <p className="error">{error}</p>}

      {tasks.length === 0 && <p className="no-tasks">No tasks yet. Add your first task above!</p>}

      <TaskList tasks={tasks} toggleComplete={toggleComplete} />

      {allComplete && <p className="motivation"> Keep up the good work! </p>}
    </div>
  );
}

export default TasksPage;
