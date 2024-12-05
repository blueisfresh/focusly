"use client";

import React from "react";
import TaskModal from "../../components/task-modal";
import { useRouter } from "next/navigation";
import { useTaskContext } from "@/contexts/TaskContext";

export default function TaskCreatorPage() {
  const { setRows } = useTaskContext();
  const router = useRouter();

  const handleSave = (taskName: string, description: string) => {
    setRows((prevRows) => {
      console.log("Previous Rows (before update):", prevRows);

      // Create a new task object
      const newTask = {
        key: `${prevRows.length + 1}`, // Ensure unique key
        content: taskName,
        description: description,
      };

      console.log("New Task:", newTask);
      console.log(prevRows.length);

      // Return the updated rows
      const updatedRows = [...prevRows, newTask];
      console.log("Updated Rows (after adding):", updatedRows);

      return updatedRows;
    });

    router.push("/"); // Navigate back to the table page
  };

  return (
    <div>
      <TaskModal
        isOpen={true}
        onClose={() => router.push("/")} // Navigate back on close
        onSave={handleSave} // Handle saving task
        title="Add New Task"
        taskNameLabel="Task Name"
        descriptionLabel="Description"
        saveButtonText="Save"
        cancelButtonText="Cancel"
      />
    </div>
  );
}
