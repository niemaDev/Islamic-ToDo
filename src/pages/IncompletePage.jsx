import TaskList from "../components/TaskList";
function IncompletePage() {
  const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const incompleteTasks = allTasks.filter(task => !task.completed);
  return (
    <div className="container page-center">
      <h1> Incomplete Tasks</h1>
      {incompleteTasks.length > 0 ? (
        <TaskList tasks={incompleteTasks} toggleComplete={() => {}} deleteTask={() => {}} />
      ) : (
        <p>No incomplete tasks. You're doing great!</p>
      )}
    </div>
  );
}

export default IncompletePage;
