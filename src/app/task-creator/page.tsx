"use client";

import React from "react";
import TaskModal from "../../components/task-modal";
import { useRouter } from "next/navigation";
import { useTaskContext } from "@/contexts/TaskContext";

export default function TaskCreatorPage() {
  const { addTask } = useTaskContext();
  const router = useRouter();

  const handleSave = (taskName: string, description: string) => {
    addTask(taskName, description);
    router.push("/");

    // setRows((prevRows) => {
    //   console.log(
    //     `Page.tsx - Previous Rows (before update): ${JSON.stringify(prevRows)}`
    //   );

    //   // Create a new task object
    //   const newTask = {
    //     key: `${prevRows.length + 1}`, // Ensure unique key
    //     content: taskName,
    //     description: description,
    //   };

    //   console.log("Page.tsx - New Task:", newTask);
    //   console.log(`Page.tsx - B4 prevRowsLength=${prevRows.length}`);

    //   // Return the updated rows
    //   const updatedRows = [...prevRows, newTask];
    //   console.log(`Page.tsx - Updated Rows (after adding): ${updatedRows}`);
    //   console.log(`Page.tsx - after prevRowsLength=${updatedRows.length}`);

    //   return updatedRows;
    // });

    // router.push("/"); // Navigate back to the table page
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
