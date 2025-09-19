function TaskCard({ title, dueDate }) {
  const cardStyle = {
    border: "1px solid #c77dff",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px 0",
    backgroundColor: "#f8f0ff", 
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  };
  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#5a189a",
  };
  const dateStyle = {
    fontSize: "14px",
    color: "#7b2cbf",
  };
  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={dateStyle}>Due: {dueDate}</div>
    </div>
  );
}
export default TaskCard;
