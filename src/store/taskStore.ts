import { create } from "zustand";
import { Task } from "../types/task";

interface TaskStore {
  tasks: Task[];
  setTasks: (newTasks: Task[]) => void;
  importTasks: (importedTasks: Task[]) => void;
  clearTasks: () => void;
  exportTasks: () => void;
}

const useTaskStore = create<TaskStore>((set: any) => ({
  tasks: [],

  // Set tasks directly (overwrite existing tasks)
  setTasks: (newTasks) => {
    console.log("Setting new tasks:", newTasks); // Log here
    set({ tasks: newTasks });

    localStorage.setItem("tasks", JSON.stringify(newTasks)); // Store in localStorage
    console.log("Tasks saved to localStorage"); // Log here
  },

  // Import tasks (merge with existing tasks, prevent duplicates by ID)
  importTasks: (importedTasks) =>
    set((state: any) => ({
      tasks: [
        ...state.tasks,
        ...importedTasks.filter(
          (newTask) => !state.tasks.some((task: any) => task.id === newTask.id)
        ),
      ],
    })),

  // Clear all tasks
  clearTasks: () => {
    localStorage.removeItem("tasks"); // Clear localStorage
    set({ tasks: [] });
  },

  exportTasks: () => {
    // Access tasks from Zustand
    const tasks = useTaskStore.getState().tasks;

    if (!tasks || tasks.length === 0) {
      console.log("No tasks available to export");
      return;
    }

    // Prepare the JSON file content
    const data = JSON.stringify(tasks, null, 2); // Pretty-printed JSON
    const blob = new Blob([data], { type: "application/json" }); // Create a Blob
    const url = URL.createObjectURL(blob); // Generate a URL for the Blob

    // Create a temporary anchor element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks.json"; // Specify the file name
    a.click(); // Programmatically click the anchor to trigger the download

    // Revoke the URL after download to free up memory
    URL.revokeObjectURL(url);
  },
}));

export default useTaskStore;
