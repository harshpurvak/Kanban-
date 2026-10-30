import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("kanbanTasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (priorityFilter === "" || task.priority === priorityFilter) &&
      (statusFilter === "" || task.status === statusFilter),
  );

  const updateTaskStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task,
      ),
    );
  };

  {
    tasks.length === 0 ? (
      <p className="mb-6 text-center text-slate-400">
        No tasks yet. Add your first task.
      </p>
    ) : filteredTasks.length === 0 ? (
      <p className="mb-6 text-center text-slate-400">No tasks found.</p>
    ) : null;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="p-6">
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 w-full rounded-lg bg-slate-900 px-4 py-3 outline-none"
        />
        <AddTask setTasks={setTasks} />

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="mb-4 w-full rounded-lg bg-slate-900 px-4 py-3 outline-none md:w-auto"
        >
          <option value="">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="mb-6 ml-3 rounded-lg bg-slate-900 px-4 py-3 outline-none"
        >
          <option value="">All Statuses</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        {filteredTasks.length === 0 && (
          <p className="mb-6 text-center text-slate-400">No tasks found.</p>
        )}
        <KanbanBoard
          tasks={filteredTasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </main>
    </div>
  );
};

export default App;
