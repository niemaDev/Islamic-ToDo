function TaskCard({ title, dueDate, completed, onToggle }) {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <h3>{title}</h3>
      <p>Due: {dueDate}</p>
      <button onClick={onToggle}>
        {completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
}

export default TaskCard;
