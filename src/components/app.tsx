"use client";

import React, { useState } from "react";
import Table from "./table/table";
import TaskModal from "./task-modal";

interface Task {
  key: string;
  content: string;
}

export default function App({ children }: { children?: React.ReactNode }) {
  const [rows, setRows] = useState<Task[]>([
    {
      key: "1",
      content: "Grocery Shopping",
    },
    {
      key: "2",
      content: "Workout",
    },
    {
      key: "3",
      content: "Presentation Preparation",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const addTask = (taskName: string) => {
    const newTask: Task = {
      key: `${rows.length + 1}`, // Use a better unique key mechanism for production
      content: taskName,
    };
    setRows((prevRows) => [...prevRows, newTask]);
  };

  const handleEditTask = (task: Task) => {
    setCurrentTask(task); // Set the task to be edited
    setIsModalOpen(true); // Open the modal
  };

  const handleSaveTask = (taskName: string) => {
    if (currentTask) {
      // Update an existing task
      setRows((prevRows) =>
        prevRows.map((task) =>
          task.key === currentTask.key ? { ...task, content: taskName } : task
        )
      );
    } else {
      // Add a new task
      addTask(taskName);
    }

    setIsModalOpen(false); // Close the modal
    setCurrentTask(null); // Clear the current task
  };

  return (
    <div>
      {children} {/* If needed, include children here */}
      <Table rows={rows} onEditTask={handleEditTask} />
      <div className="flex justify-center">
        <button
          onClick={() => {
            setCurrentTask(null); // Clear the current task to add a new one
            setIsModalOpen(true); // Open the modal
          }}
          className="max-w-[750px] mt-4 w-full text-xs font-semibold uppercase bg-gray-50 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition mb-4"
        >
          Add Task
        </button>
      </div>
      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onSave={handleSaveTask}
          onClose={() => setIsModalOpen(false)}
          taskName={currentTask ? currentTask.content : ""}
        />
      )}
    </div>
  );
}
