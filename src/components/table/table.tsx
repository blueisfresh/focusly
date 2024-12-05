import React from "react";
import TableRow from "./table-row";

export default function Table() {
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
          <tbody>
            <TableRow>Apple MacBook Pro 17"</TableRow>
            <TableRow>Apple MacBook Pro 17"</TableRow>
            <TableRow>Apple MacBook Pro 17"</TableRow>
          </tbody>
        </table>

        {/* Add new Row drop down */}
        <button className="mt-4 w-full text-xs font-semibold uppercase bg-gray-50 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Add new Task
        </button>
      </div>
    </div>
  );
}
