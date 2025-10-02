function TaskCard({ title, dueDate, completed, onToggle, onDelete }) {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <h3>{title}</h3>
      <p>Due: {dueDate}</p>

      <div className="task-actions">
        {/* Toggle complete */}
        <button onClick={onToggle}>
          {completed ? "Undo" : "Complete"}
        </button>

        {/* Delete task */}
        <button onClick={onDelete} style={{ marginLeft: "10px", color: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
