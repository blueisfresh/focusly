import { create } from "zustand";
import { Task } from "../types/task";

const LOCAl_STORAGE_KEY = "tasks";

const getInitialTasks = () => {
  const storedTasks = localStorage.getItem(LOCAl_STORAGE_KEY); // get data from localStorage
  return storedTasks ? JSON.parse(storedTasks) : []; // return the values from it
};

interface TaskStore {
  tasks: Task[];
  /////////////////////////////
  isFileLoaded: boolean;
  setfileLoaded: (state: boolean) => void;
  /////////////////////////////
  setTasks: (newTasks: Task[]) => void;
  clearTasks: () => void;
  exportTasks: () => void;
}

const useTaskStore = create<TaskStore>((set: any) => ({
  // Array that holds all tasks
  tasks: getInitialTasks(),

  isFileLoaded: false,

  setfileLoaded: (state: boolean) => {
    set({ isFileLoaded: state }); // Ensure the key matches the state property name
  },

  // Set tasks directly (overwrite existing tasks)
  setTasks: (newTasks) => {
    // console.log(`Setting tasks to: ${newTasks}`);
    localStorage.setItem(LOCAl_STORAGE_KEY, JSON.stringify(newTasks)); // Save tasks to localStorage
    set({ tasks: newTasks });
    console.log("Tasks succesfully saved to localStorage");
  },

  // Clear all tasks
  clearTasks: () => {
    localStorage.removeItem(LOCAl_STORAGE_KEY); // Clear localStorage
    set({ tasks: [] });
    console.log("Tasks succesfully cleared from localStorage");
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
    console.log("Tasks succesfully exported to JSON file");
  },
}));

export default useTaskStore;
