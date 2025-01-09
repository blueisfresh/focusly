import React from "react";
import TaskRow from "./TaskRow";
import useTaskStore from "@/store/taskStore";
import { Task } from "@/types/task";
import { useRouter } from "next/navigation";

export default function TaskTable() {
  const { tasks, setTasks } = useTaskStore(); // gets the tasks from taskStore (ZUSTAND)
  const router = useRouter();

  // useEffect(() => {
  //   if (tasks) {
  //     setTasks(tasks); // Update the tasks in the store (ZUSTAND)
  //   } else {
  //     setTasks([]); // Set parsedTasks to an empty array if no tasks are stored
  //   }
  // }, []); // useEffect runs only once

  // Method: for navigating to add Page

  //       const handleAddNewTask = () => {
  //   window.location.href = "/add";
  // };

  const handleAddNewTask = () => {
    router.push("/add");
  };

  console.log("tasks", tasks);
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
            {tasks &&
              tasks.length > 0 &&
              tasks.map((task) => (
                <TaskRow
                  key={task.id}
                  isCompleted={task.completed}
                  task={task}
                />
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
