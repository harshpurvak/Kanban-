import React from "react";

import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ tasks, updateTaskStatus, deleteTask, editTask}) => {
  const todoTasks = tasks.filter((task) => task.status === "Todo");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <KanbanColumn
        title="Todo"
        tasks={todoTasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <KanbanColumn
        title="In Progress"
        tasks={inProgressTasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <KanbanColumn
        title="Completed"
        tasks={completedTasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default KanbanBoard;
