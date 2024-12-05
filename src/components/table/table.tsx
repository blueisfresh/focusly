"use client";

import React, { useState } from "react";
import TableRow, { createNewRow } from "./table-row";

export default function Table() {
  const [rows, setRows] = useState<JSX.Element[]>([
    <TableRow key="1">Apple MacBook Pro 17"</TableRow>,
    <TableRow key="2">Apple MacBook Pro 17"</TableRow>,
    <TableRow key="3">Apple MacBook Pro 17"</TableRow>,
  ]);

  // Function to handle adding a new row
  const handleAddNewRow = () => {
    const newTaskName = `New Task ${rows.length + 1}`; // Example task name
    const newRow = createNewRow(newTaskName); // Use createNewRow to generate the new TableRow
    setRows((prevRows) => [
      ...prevRows,
      React.cloneElement(newRow, { key: rows.length + 1 }),
    ]);
  };

  return (
    <div className="flex justify-center">
      <div className="relative max-w-[750px] mx-auto sm:rounded-lg max-h-screen overflow-auto">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {/* Header for task & edit */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3 w-20">
                Edit
              </th>
            </tr>
          </thead>

          {/* Rows */}
          <tbody>{rows}</tbody>
        </table>

        {/* Add new Row drop down */}
        <button
          onClick={handleAddNewRow} // Use the correct function here
          className="mt-4 w-full text-xs font-semibold uppercase bg-gray-50 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Add New Task
        </button>
      </div>
    </div>
  );
}
