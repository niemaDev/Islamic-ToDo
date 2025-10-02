import TaskCard from "./TaskCard";

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          dueDate={task.dueDate}
          completed={task.completed}
          onToggle={() => toggleComplete(index)}
          onDelete={() => deleteTask(index)} // 🔴 NEW delete handler
        />
      ))}
    </div>
  );
}

export default TaskList;
