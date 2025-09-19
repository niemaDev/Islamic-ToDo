function TaskCard({ title, dueDate, completed, toggleComplete }) {
  const cardStyle = {
    border: "1px solid #c77dff",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px 0",
    backgroundColor: completed ? "#d3ffd3" : "#f8f0ff", // green if completed
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#5a189a",
    textDecoration: completed ? "line-through" : "none",
  };

  const dateStyle = {
    fontSize: "14px",
    color: "#7b2cbf",
  };

  return (
    <div style={cardStyle}>
      <div>
        <div style={titleStyle}>{title}</div>
        <div style={dateStyle}>Due: {dueDate}</div>
      </div>
      <button
        onClick={toggleComplete}
        style={{
          padding: "5px 10px",
          backgroundColor: completed ? "#7b2cbf" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
}

export default TaskCard;
