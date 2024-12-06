"use client";

import React from "react";
import TaskModal from "../../components/task-modal";
import { useRouter } from "next/navigation";
import { useTaskContext } from "@/contexts/TaskContext";
import { getLogs } from "@/utils/logger";

export default function TaskCreatorPage() {
  const { addTask } = useTaskContext();
  const router = useRouter();

  const handleSave = (taskName: string, description: string) => {
    addTask(taskName, description);
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
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-bold mb-2">Logs</h2>
        <pre className="text-sm">{getLogs().join("\n")}</pre>
      </div>
    </div>
  );
}
