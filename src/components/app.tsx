"use client";

import React, { useState } from "react";
import Table from "./table/table";
import TaskModal from "./task-modal";

interface Task {
  key: string;
  content: string;
  description: string;
}

export default function App({ children }: { children?: React.ReactNode }) {
  const [rows, setRows] = useState<Task[]>([
    {
      key: "1",
      content: "Grocery Shopping",
      description: "Buy fruits, vegetables, milk, and bread.",
    },
    {
      key: "2",
      content: "Workout",
      description: "30 minutes of cardio and stretching.",
    },
    {
      key: "3",
      content: "Presentation Prep",
      description: "Prepare slides for the Monday meeting.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (taskName: string, description: string) => {
    const newTask: Task = {
      key: `${rows.length + 1}`, // Use a better unique key mechanism for production
      content: taskName,
      description,
    };
    setRows((prevRows) => [...prevRows, newTask]);
  };

  return (
    <div>
      {children} {/* If needed, include children here */}
      <Table rows={rows} />
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>
      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen} // Pass the isOpen prop
          onSave={(taskName, description) => {
            addTask(taskName, description);
            setIsModalOpen(false);
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
