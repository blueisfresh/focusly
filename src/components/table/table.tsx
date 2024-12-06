"use client";

import React from "react";
import TableRow from "./table-row";
import { useTaskContext } from "@/contexts/TaskContext";

export default function Table() {
  const { rows } = useTaskContext();
  console.log(
    "Rows in Table component:",
    rows.map((row) => row.key)
  );

  const handleAddNewTask = () => {
    window.location.href = "/task-creator"; // Navigate to task-creator page
  };

  return (
    <div className="flex justify-center">
      <div className="relative max-w-[750px] mx-auto sm:rounded-lg max-h-screen overflow-auto">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3 w-20">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <TableRow key={row.key} keyProp={row.key}>
                {row.content}
              </TableRow>
            ))}
          </tbody>
        </table>

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
