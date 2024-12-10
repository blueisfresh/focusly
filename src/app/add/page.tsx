"use client";

import { useState } from "react";
import useTaskStore from "../../store/taskStore";

export default function Page() {
  const addTask = useTaskStore((state) => state.setTasks); // Zustand add task function
  const tasks = useTaskStore((state) => state.tasks);

  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!title || !dueDate) {
      alert("Please fill in all required fields (Title and Due Date)");
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(), // Generate a unique ID
      title,
      priority,
      dueDate,
    };

    // Add new task to Zustand
    addTask([...tasks, newTask]);

    // Clear form fields
    setTitle("");
    setPriority("Medium");
    setDueDate("");

    alert("Task added successfully!");
  };

  return (
    <div className="max-w-[800px] mx-auto py-10 px-6 bg-gray-50 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Task Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Task Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter task title"
            required
          />
        </div>

        {/* Task Priority */}
        <div>
          <label
            htmlFor="priority"
            className="block text-gray-700 font-medium mb-2"
          >
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Task Due Date */}
        <div>
          <label
            htmlFor="dueDate"
            className="block text-gray-700 font-medium mb-2"
          >
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
