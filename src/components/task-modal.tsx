"use client";

import React, { useState, useEffect } from "react";

interface TaskModalProps {
  isOpen: boolean; // Determines if the modal is open
  onSave: (taskName: string) => void; // Callback to save the task
  onClose: () => void; // Callback to close the modal
  taskName: string; // Current task name (for editing)
}

export default function TaskModal({
  isOpen,
  onClose,
  onSave,
  taskName,
}: TaskModalProps) {
  const [taskNameInput, setTaskNameInput] = useState(taskName);

  // Synchronize input field with the current task name when the modal opens
  useEffect(() => {
    setTaskNameInput(taskName);
  }, [taskName]);

  const handleSave = () => {
    if (!taskNameInput.trim()) {
      alert("Task name is required.");
      return;
    }
    onSave(taskNameInput); // Save the task
    setTaskNameInput(""); // Clear the input field after saving
  };

  if (!isOpen) return null; // Do not render the modal if it is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          {taskName ? "Edit Task" : "Add New Task"}
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Task Name
          </label>
          <input
            type="text"
            value={taskNameInput}
            onChange={(e) => setTaskNameInput(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter task name"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
