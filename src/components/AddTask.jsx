import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddTask = ({ setTasks }) => {
  const [showForm, setShowForm] = useState(false);
  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...data, id: Date.now(), status: "Todo" },
    ]);
    setShowForm(false);
    reset();
  };

  return (
    <div className="mb-6">
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700"
        >
          Add Task
        </button>
      )}

      {showForm && (
        <div className="rounded-xl bg-slate-900 p-5">
          <h2 className="mb-4 text-lg font-semibold">Add New Task</h2>

          <div className="space-y-4">
            {/* title */}
            <input
              {...register("title", {
                required: "Task title is required",
              })}
              type="text"
              placeholder="Task title"
              className="w-full rounded-lg bg-slate-800 px-4 py-2 outline-none"
            />

            {errors.title && (
              <p className="text-sm text-red-400">{errors.title.message}</p>
            )}

            {/* description */}
            <textarea
              {...register("description", {
                required: "Description is required",
                validate: (value) =>
                  value.trim().split(/\s+/).length >= 6 ||
                  "Description must be at least 6 words",
              })}
              placeholder="Task description"
              rows="4"
              className="w-full rounded-lg bg-slate-800 px-4 py-2 outline-none"
            />

            {errors.description && (
              <p className="text-sm text-red-400">
                {errors.description.message}
              </p>
            )}
            {/* priority */}
            <select
              {...register("priority", {
                required: "Please select a priority",
              })}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 outline-none"
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            {errors.priority && (
              <p className="text-sm text-red-400">{errors.priority.message}</p>
            )}

            {/* due date */}
            <input
              {...register("dueDate")}
              type="date"
              className="w-full rounded-lg bg-slate-800 px-4 py-2 outline-none"
            />

            {errors.dueDate && (
              <p className="text-sm text-red-400">{errors.dueDate.message}</p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg bg-slate-700 px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={handleFormSubmit(handleSubmit)}
                className="rounded-lg bg-blue-600 px-4 py-2"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
