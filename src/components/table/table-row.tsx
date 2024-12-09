import { useState } from "react";

interface Task {
  key: string;
  content: string;
}

export default function TableRow({
  children,
  task,
  onEditTask,
}: {
  children: React.ReactNode;
  task: Task;
  onEditTask: (task: Task) => void;
}) {
  return (
    <tr className="bg-white hover:bg-gray-50">
      <td scope="row" className="px-6 py-4 font-medium text-gray-900">
        <p>{children}</p>
      </td>
      {/* Edit Icon or Image */}
      <td className="px-6 py-4 text-right w-30 hover:bg-slate-100">
        <img
          src="https://utfs.io/f/MOA66ou6ZmXlgI7mQfAYaOBp7g4E5Yrd189ynuqlhGPX06oM"
          alt="Edit Icon"
          className="h-8 w-8 cursor-pointer"
          onClick={() => onEditTask(task)}
        />
      </td>
    </tr>
  );
}
