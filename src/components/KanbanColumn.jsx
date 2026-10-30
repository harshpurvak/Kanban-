import React, { useState } from "react";
import { useForm } from "react-hook-form";

const KanbanColumn = ({
  title,
  tasks,
  updateTaskStatus,
  deleteTask,
  editTask,
}) => {
  const [editingTaskId, setEditingTaskId] = useState(null);

  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="rounded-xl bg-slate-900 p-4">
      <h2 className="mb-4 font-semibold">{title}</h2>

      {tasks.length === 0 && (
        <p className="text-sm text-slate-500">No tasks in {title}</p>
      )}

      {tasks.map((task) => (
        <div key={task.id} className="mb-3 rounded-lg bg-slate-800 p-4">
          <h3 className="font-semibold">{task.title}</h3>

          <p className="mt-1 text-sm text-slate-400">{task.description}</p>
          <div className="mt-2">
            <span className="rounded-full bg-slate-700 px-2 py-1 text-xs">
              {task.priority}
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-400">Due: {task.dueDate}</p>

          <select
            value={task.status}
            onChange={(e) => updateTaskStatus(task.id, e.target.value)}
            className="mt-3 w-full rounded-lg bg-slate-700 px-3 py-2 text-sm outline-none"
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <button
            onClick={() => deleteTask(task.id)}
            className="m-3 rounded-lg bg-red-600 px-3 py-2 text-sm hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={() => {
              setEditingTaskId(task.id);
            }}
            className="m-3 rounded-lg bg-blue-400 px-3 py-2 text-sm hover:bg-blue-600"
          >
            Edit
          </button>
          {editingTaskId === task.id && (
            <div className="mt-4 space-y-3">
              <input
                {...register("editTitle", {
                  required: "Task title is required",
                })}
                type="text"
                defaultValue={task.title}
                className="w-full rounded-lg bg-slate-700 px-3 py-2 text-sm outline-none"
              />

              {errors.editTitle && (
                <p className="text-sm text-red-400">
                  {errors.editTitle.message}
                </p>
              )}

              <textarea
                {...register("editDescription", {
                  required: "Description is required",
                  validate: (value) =>
                    value.trim().split(/\s+/).length >= 6 ||
                    "Description must be at least 6 words",
                })}
                defaultValue={task.description}
                rows="3"
                className="w-full rounded-lg bg-slate-700 px-3 py-2 text-sm outline-none"
              />

              {errors.editDescription && (
                <p className="text-sm text-red-400">
                  {errors.editDescription.message}
                </p>
              )}
              <select
                value={task.priority}
                onChange={(e) =>
                  setEditForm({ ...editForm, priority: e.target.value })
                }
                className="w-full rounded-lg bg-slate-700 px-3 py-2 text-sm outline-none"
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              {errors.editPriority && (
                <p className="text-sm text-red-400">
                  {errors.editPriority.message}
                </p>
              )}

              <input
                {...register("editDueDate", {
                  required: "Due date is required",
                })}
                defaultValue={task.dueDate}
                type="date"
                className="w-full rounded-lg bg-slate-700 px-3 py-2 text-sm outline-none"
              />

              {errors.editDueDate && (
                <p className="text-sm text-red-400">
                  {errors.editDueDate.message}
                </p>
              )}

              <button
                onClick={handleFormSubmit((data) => {
                  editTask(task.id, {
                    title: data.editTitle,
                    description: data.editDescription,
                    priority: data.editPriority,
                    dueDate: data.editDueDate,
                  });

                  setEditingTaskId(null);
                  reset();
                })}
                className="rounded-lg bg-green-600 px-3 py-2 text-sm hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setEditingTaskId(null)}
                className="ml-2 rounded-lg bg-slate-600 px-3 py-2 text-sm hover:bg-slate-700"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default KanbanColumn;
