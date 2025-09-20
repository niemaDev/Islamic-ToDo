import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
function Spinner() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
      <svg width="28" height="28" viewBox="0 0 50 50" aria-hidden="true">
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#7b2cbf"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <span style={{ color: "#7b2cbf" }}>Loading daily quote...</span>
    </div>
  );
}
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { title: "Read Quran", dueDate: "2025-09-20", completed: false },
          { title: "Pray Fajr on time", dueDate: "2025-09-19", completed: false },
          { title: "Memorize Surah Al-Fatiha", dueDate: "2025-09-22", completed: false },
        ];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loadingQuote, setLoadingQuote] = useState(true);
  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("https://api.quotable.io/random?tags=wisdom");
        const data = await res.json();
        setQuote(data.content || "Stay strong and keep your faith!");
        setAuthor(data.author || "");
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Stay strong and keep your faith!");
        setAuthor("");
      } finally {
        setLoadingQuote(false);
      }
    }
    fetchQuote();
  }, []);
  const addTask = () => {
    if (!newTaskTitle || !newTaskDate) return;
    setTasks([...tasks, { title: newTaskTitle, dueDate: newTaskDate, completed: false }]);
    setNewTaskTitle("");
    setNewTaskDate("");
  };
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const allCompleted = tasks.length > 0 && tasks.every((task) => task.completed);
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <div style={{ textAlign: "center", margin: "18px 0" }}>
        {loadingQuote ? (
          <Spinner />
        ) : (
          <div>
            <h2 style={{ color: "#5a189a", fontStyle: "italic", margin: 0 }}>"{quote}"</h2>
            {author && <p style={{ marginTop: 6, color: "#7b2cbf" }}>— {author}</p>}
          </div>
        )}
      </div>
      <h1 style={{ textAlign: "center", margin: "30px 0", color: "#5a189a" }}>
        Welcome to My Islamic To-Do App
      </h1>
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
      {allCompleted && (
        <h3 style={{ marginTop: "20px", color: "#28a745", textAlign: "center" }}>
           Keep up the good work! All tasks completed! 
        </h3>
      )}
    </div>
  );
}
export default App;
