import TaskList from "../components/TaskList";

function CompletedPage() {
  const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const completedTasks = allTasks.filter(task => task.completed);

  return (
    <div className="container page-center">
      <h1> Completed Tasks</h1>
      {completedTasks.length > 0 ? (
        <TaskList tasks={completedTasks} toggleComplete={() => {}} deleteTask={() => {}} />
      ) : (
        <p>No completed tasks yet.</p>
      )}
    </div>
  );
}

export default CompletedPage;
