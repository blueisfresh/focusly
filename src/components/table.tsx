import React from "react";

export default function Table() {
  return (
    <div className="flex justify-center">
      <div className="relative max-w-[750px] sm:rounded-lg max-h-screen overflow-auto">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </td>
              <td className="px-6 py-4 text-right w-30 hover:bg-slate-100">
                <img
                  src="https://utfs.io/f/MOA66ou6ZmXlgI7mQfAYaOBp7g4E5Yrd189ynuqlhGPX06oM"
                  alt="Logo"
                  className="h-8 w-8"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
