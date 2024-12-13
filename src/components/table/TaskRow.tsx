import React from "react";

export default function TaskRow({
  children,
  isCompleted,
}: {
  children: React.ReactNode;
  isCompleted: boolean;
}) {
  return (
    <tr
      className={`${
        isCompleted
          ? "bg-gray-100 hover:bg-gray-200" // Darker hover for completed tasks
          : "bg-white hover:bg-gray-50" // Default hover for incomplete tasks
      }`}
    >
      {React.Children.toArray(children).map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}

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
  );
}
