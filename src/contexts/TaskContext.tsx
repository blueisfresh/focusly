"use client";

import React, { createContext, useContext, useState } from "react";

interface Task {
  key: string;
  content: string;
  description: string;
}

interface TaskContextType {
  rows: Task[];
  setRows: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [rows, setRows] = useState<Task[]>([
    {
      key: "1",
      content: "Grocery Shopping",
      description:
        "Buy fruits, vegetables, milk, and bread from the supermarket.",
    },
    {
      key: "2",
      content: "Workout Session",
      description:
        "Complete a 30-minute cardio session and 15 minutes of stretching.",
    },
    {
      key: "3",
      content: "Prepare Presentation",
      description: "Create slides for the upcoming project meeting on Monday.",
    },
  ]);

  return (
    <TaskContext.Provider value={{ rows, setRows }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
