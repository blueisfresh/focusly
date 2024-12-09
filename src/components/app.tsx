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
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="max-w-[750px] mt-4 w-full text-xs font-semibold uppercase bg-gray-50 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Add Task
        </button>
      </div>
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
