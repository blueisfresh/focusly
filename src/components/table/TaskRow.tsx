"use client";

import useTaskStore from "@/store/taskStore";
import { Task } from "@/types/task";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";

export default function TaskRow({
  task,
  isCompleted,
}: {
  task: Task;
  isCompleted: boolean;
}) {
  const { updateTask } = useTaskStore(); // updates the tasks from taskStore (ZUSTAND)

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Method: Display right image based on the priority
  const getPriorityImage = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "https://utfs.io/f/MOA66ou6ZmXlRmeSRYBLSkIZTfAFlrzPwRWxGtMy02nKCovm";
      case "medium":
        return "https://utfs.io/f/MOA66ou6ZmXloe1KhUX5AQLy6P9ghUbHvNeiJEVBKnWu74R2";
      case "low":
        return "https://utfs.io/f/MOA66ou6ZmXluXeQf2LodR0DtqXI9bGcx48gCv16aSYJen5k";
      default:
        return "https://utfs.io/f/MOA66ou6ZmXl0evFk0Ie9YtB5DXH3yuvq2SMFNOfrKwsxh4E";
    }
  };

  // Method: Toggle the task completed status
  const handleToggleCompleted = (task: Task) => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <>
      {isClient && (
        <tr
          className={`${
            isCompleted
              ? "bg-gray-100 hover:bg-gray-200" // Darker hover for completed tasks
              : "bg-white hover:bg-gray-50" // Default hover for incomplete tasks
          }`}
        >
          <td className="px-6 py-4 font-medium text-gray-900">{task.title}</td>
          <td className="px-6 py-4 font-medium text-gray-900">
            <img
              src={getPriorityImage(task.priority)} // Required for <Image /> from next/image
              alt={`${task.priority} priority`}
              className="h-6 w-6"
              // width={24} // Specify width
              // height={24} // Specify height
            />
          </td>
          <td className="px-6 py-4 font-medium text-gray-900">
            {task.dueDate}
          </td>
          <td className="px-6 py-4 font-medium text-gray-900">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task)}
              className="cursor-pointer"
            />
          </td>

          {/* Add additional actions */}
          <td className="px-6 py-4 text-right w-30 hover:bg-slate-100">
            <img
              src="https://utfs.io/f/MOA66ou6ZmXlgI7mQfAYaOBp7g4E5Yrd189ynuqlhGPX06oM"
              alt="Edit Icon"
              className="h-8 w-8 cursor-pointer"
            />
          </td>
          <td className="px-6 py-4 text-right w-30 hover:bg-slate-100">
            <img
              src="https://utfs.io/f/MOA66ou6ZmXlqfNgStGNnJudfAVUPMbe23olCcTI7G56mkRj"
              alt="Delete Icon"
              className="h-8 w-8 cursor-pointer"
            />
          </td>
        </tr>
      )}
    </>
  );
}
