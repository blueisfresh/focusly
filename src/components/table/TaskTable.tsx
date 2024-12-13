"use client";

import React, { useEffect } from "react";
import TaskRow from "./TaskRow";
import useTaskStore from "@/store/taskStore";
import { Task } from "@/types/task";

export default function TaskTable() {
  const tasks = useTaskStore((state) => state.tasks); // gets the tasks from taskStore (ZUSTAND)
  const setTasks = useTaskStore((state) => state.setTasks); // updates the tasks from taskStore (ZUSTAND)

  useEffect(() => {
    if (tasks) {
      setTasks(tasks); // Update the tasks in the store (ZUSTAND)
    } else {
      setTasks([]); // Set parsedTasks to an empty array if no tasks are stored
    }
  }, []); // useEffect runs only once

  // Method: for navigating to add Page
  const handleAddNewTask = () => {
    window.location.href = "/add";
  };

  // Method: Display right image based on the priority
  const getPriorityImage = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "https://utfs.io/f/MOA66ou6ZmXlRmeSRYBLSkIZTfAFlrzPwRWxGtMy02nKCovm";
      case "medium":
        return "https://utfs.io/f/MOA66ou6ZmXloe1KhUX5AQLy6P9ghUbHvNeiJEVBKnWu74R2  ";
      case "low":
        return "https://utfs.io/f/MOA66ou6ZmXluXeQf2LodR0DtqXI9bGcx48gCv16aSYJen5k";
      default:
        return "https://utfs.io/f/MOA66ou6ZmXl0evFk0Ie9YtB5DXH3yuvq2SMFNOfrKwsxh4E";
    }
  };

  // Method: Toggle the task completed status
  const handleToggleCompleted = (task: Task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks); // Update Zustand store
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
            {tasks.map((task: Task) => (
              <TaskRow key={task.id}>
                <>
                  <td>{task.title}</td>
                  <td>
                    <img
                      src={getPriorityImage(task.priority)}
                      alt={`${task.priority} priority`}
                      className="h-6 w-6"
                    />
                  </td>
                  <td>{task.dueDate}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleCompleted(task)}
                      className="cursor-pointer"
                    />
                  </td>
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
