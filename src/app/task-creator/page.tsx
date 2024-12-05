"use client";

import React from "react";
import TaskModal from "../../components/task-modal";
import { useRouter } from "next/navigation";
import { useTaskContext } from "@/contexts/TaskContext";

export default function TaskCreatorPage() {
  const { setRows } = useTaskContext();
  const router = useRouter();

  const handleSave = (taskName: string, description: string) => {
    setRows((prevRows) => [
      ...prevRows,
      {
        key: `${prevRows.length + 1}`,
        content: taskName,
        description: description,
      },
    ]);

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
