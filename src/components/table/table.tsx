"use client";

import React, { useState } from "react";
import TableRow from "./table-row";
import Task from "../task-creator";

export default function Table() {
  const [rows, setRows] = useState<
    { key: string; content: string; description: string }[]
  >([
    {
      key: "1",
      content: "Apple MacBook Pro 17",
      description: "A high-end laptop.",
    },
    {
      key: "2",
      content: "Dell XPS 13",
      description: "A compact and powerful ultrabook.",
    },
    {
      key: "3",
      content: "Lenovo ThinkPad X1",
      description: "A durable business laptop.",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddNewRow = (taskName: string, description: string) => {
    const newKey = `${rows.length + 1}`; // Generate a new unique key
    setRows((prevRows) => [
      ...prevRows,
      { key: newKey, content: taskName, description: description },
    ]);
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

        {/* Button to Add a New Task */}
        <button
          onClick={() => setModalOpen(true)} // Open the modal
          className="mt-4 w-full text-xs font-semibold uppercase bg-gray-50 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Add New Task
        </button>

        {/* Modal */}
        <Task
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSave={(taskName, description) =>
            handleAddNewRow(taskName, description)
          }
        />
      </div>
    </div>
  );
}
