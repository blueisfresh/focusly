"use client";

import React, { useEffect } from "react";
import TaskRow from "./TaskRow";
import useTaskStore from "@/store/taskStore";
import { Task } from "@/types/task";

export default function TaskTable() {
  const tasks = useTaskStore((state) => state.tasks); // gets the tasks from taskStore (ZUSTAND)
  const setTasks = useTaskStore((state) => state.setTasks); // updates the tasks from taskStore (ZUSTAND)

  const [parsedTasks, setParsedTasks] = React.useState<Task[]>([]); // new used State for parsed tasks from localStorage

  useEffect(() => {
    if (tasks) {
      setTasks(tasks); // Update the tasks in the store (ZUSTAND)
    } else {
      setTasks([]); // Set parsedTasks to an empty array if no tasks are stored
    }
  }, []);

  const handleAddNewTask = () => {
    window.location.href = "/add"; // Navigate to task-creator page
  };

  return (
    <div className="flex justify-center">
      <div className="relative max-w-[900px] mx-auto sm:rounded-lg max-h-screen overflow-auto">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 w-40 text-left">
                Task
              </th>
              <th scope="col" className="px-6 py-3 w-32 text-left">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 w-36 text-left">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3 w-36 text-left">
                Completed
              </th>
              <th scope="col" className="px-6 py-3 w-20 text-center">
                Edit
              </th>
              <th scope="col" className="px-6 py-3 w-20 text-right">
                Delete
              </th>
            </tr>
          </thead>

          {/* function switch case return div with the server image */}

          <tbody>
            {/* keyProp={task.id */}
            {tasks.map((task: Task) => (
              <TaskRow key={task.id}>
                <>
                  {/* td instead of divs */}
                  <div>{task.title}</div>
                  <div>{task.priority}</div>
                  <div>{task.dueDate}</div>
                  <div>{task.completed ? "Completed" : "Not Completed"}</div>
                </>
              </TaskRow>
            ))}
          </tbody>
        </table>

        {/* Button to add a Task */}
        <button
          onClick={handleAddNewTask}
          className="mt-4 w-full text-xs font-semibold uppercase bg-gray-50 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Add New Task
        </button>
      </div>
    </div>
  );
}
