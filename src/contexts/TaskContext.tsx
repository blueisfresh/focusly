"use client";

import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Task {
  key: string;
  content: string;
  description: string;
}

interface TaskContextType {
  rows: Task[];
  addTask: (taskName: string, description: string) => void; // Add Task method
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

  // Add Task method to update the rows state
  const addTask = (taskName: string, description: string) => {
    const newTask = {
      key: uuidv4(), // Use UUID for unique keys
      content: taskName,
      description,
    };

    setRows((prevRows) => {
      const updatedRows = [...prevRows, newTask];
      console.log(prevRows);
      console.log("Task added:", newTask);
      console.log("Updated rows in context:", updatedRows);
      return updatedRows;
    });
  };

  return (
    <TaskContext.Provider value={{ rows, addTask }}>
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
