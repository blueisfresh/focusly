"use client";

import React, { useState } from "react";
import TaskModal from "../../components/task-modal";

export default function TaskCreatorPage() {
  const [isModalOpen, setModalOpen] = useState(true); // Open the modal by default

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = (taskName: string, description: string) => {
    console.log("Saving Task:", { taskName, description });
    // Add your logic for saving the task
  };

  return (
    <div>
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)} // Close the modal
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
