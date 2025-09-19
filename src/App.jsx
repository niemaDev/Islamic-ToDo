import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
function App() {
  const tasks = [
    { title: "Read Quran", dueDate: "2025-09-20" },
    { title: "Pray Fajr on time", dueDate: "2025-09-19" },
    { title: "Memorize Surah Al-Fatiha", dueDate: "2025-09-22" },
  ];
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <h1 style={{ textAlign: "center", margin: "30px 0", color: "#5a189a" }}>
        Welcome to My Islamic To-Do App
      </h1>
      <h2 style={{ color: "#7b2cbf" }}>My Tasks</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index} title={task.title} dueDate={task.dueDate} />
      ))}
    </div>
  );
}
export default App;
