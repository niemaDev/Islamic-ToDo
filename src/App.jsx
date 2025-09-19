import { useState } from "react";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
function App() {
  const [tasks, setTasks] = useState([
    { title: "Read Quran", dueDate: "2025-09-20", completed: false },
    { title: "Pray Fajr on time", dueDate: "2025-09-19", completed: false },
    { title: "Memorize Surah Al-Fatiha", dueDate: "2025-09-22", completed: false },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const addTask = () => {
    if (newTaskTitle && newTaskDate) {
      setTasks([
        ...tasks,
        { title: newTaskTitle, dueDate: newTaskDate, completed: false },
      ]);
      setNewTaskTitle("");
      setNewTaskDate("");
    }
  };
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <h1 style={{ textAlign: "center", margin: "30px 0", color: "#5a189a" }}>
        Welcome to My Islamic To-Do App
      </h1>
      {/* New Task Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="date"
          value={newTaskDate}
          onChange={(e) => setNewTaskDate(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "5px 10px",
            backgroundColor: "#7b2cbf",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add Task
        </button>
      </div>
      <h2 style={{ color: "#7b2cbf" }}>My Tasks</h2>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          dueDate={task.dueDate}
          completed={task.completed}
          toggleComplete={() => toggleComplete(index)}
        />
      ))}
    </div>
  );
}
export default App;
