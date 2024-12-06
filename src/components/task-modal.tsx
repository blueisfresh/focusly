"use client";

import React, { useState } from "react";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (taskName: string, description: string) => void;
  title: string;
  taskNameLabel: string;
  descriptionLabel: string;
  saveButtonText: string;
  cancelButtonText: string;
}

export default function TaskModal({
  isOpen,
  onClose,
  onSave,
  title,
  taskNameLabel,
  descriptionLabel,
  saveButtonText,
  cancelButtonText,
}: TaskModalProps) {
  const [taskName, setTaskName] = useState("");
  console.log(`Task-modal.tsx Usestate - taskName: ${taskName}`);
  const [description, setDescription] = useState("");
  console.log(`Task-modal.tsx Usestate - description: ${description}`);

  const handleSave = () => {
    onSave(taskName, description); // Call the save handler with current values
    console.log(`Task-modal.tsx - onSave: ${onSave}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {taskNameLabel}
          </label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {descriptionLabel}
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
          >
            {cancelButtonText}
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {saveButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
