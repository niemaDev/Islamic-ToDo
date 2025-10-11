import React, { useState, useEffect } from "react";
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
      setError(" Please enter both task title and date!");
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

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const allComplete = tasks.length > 0 && tasks.every((t) => t.completed);

  return (
    <div className="container">
      {/* Quote Section Card */}
      <div className="task-quote-card">
        <QuoteSection />
      </div>

      {/* Task Form */}
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

      {tasks.length === 0 && (
        <p className="no-tasks">No tasks yet. Add your first task above!</p>
      )}

      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />

      {allComplete && (
        <p className="motivation">
          MashaAllah, All tasks are done. Keep striving for both dunya & akhirah.
        </p>
      )}
    </div>
  );
}

export default TasksPage;
