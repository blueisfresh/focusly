"use client";

import React from "react";
import TableRow from "./table-row";

interface Task {
  key: string;
  content: string;
  description: string;
}

export default function Table({ rows = [] }: { rows?: Task[] }) {
  if (!Array.isArray(rows)) {
    console.error("Expected 'rows' to be an array, but got:", rows);
    return null;
  }

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
            {rows.map((task) => (
              <TableRow key={task.key} keyProp={task.key}>
                {task.content}
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
