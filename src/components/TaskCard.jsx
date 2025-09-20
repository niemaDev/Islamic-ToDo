function TaskCard({ title, dueDate, completed, toggleComplete }) {
  const cardStyle = {
    border: "1px solid #c77dff",
    borderRadius: "10px",
    padding: "12px",
    margin: "10px 0",
    backgroundColor: completed ? "#e6ffe6" : "#f8f0ff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const titleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "4px",
    color: "#5a189a",
    textDecoration: completed ? "line-through" : "none",
  };
  const dateStyle = { fontSize: "13px", color: "#7b2cbf" };
  return (
    <div style={cardStyle}>
      <div>
        <div style={titleStyle}>{title}</div>
        <div style={dateStyle}>Due: {dueDate}</div>
      </div>
      <button
        onClick={toggleComplete}
        style={{
          padding: "6px 10px",
          backgroundColor: completed ? "#7b2cbf" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
}
export default TaskCard;
