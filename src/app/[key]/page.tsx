"use client";

import { useRouter } from "next/navigation";

export default function TableRowDetails({
  params,
}: {
  params: { key: string };
}) {
  const router = useRouter();

  // Dummy data for demonstration (replace this with your actual data source)
  const tasks = [
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
  ];

  // Find the task by key
  const task = tasks.find((t) => t.key === params.key);

  if (!task) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Task Not Found</h2>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
        <button
          onClick={() => router.back()}
          className="text-sm text-blue-500 hover:underline mb-4"
        >
          Close
        </button>
        <h1 className="text-lg font-bold text-gray-800 mb-2">{task.content}</h1>
        <p className="text-gray-600">{task.description}</p>
      </div>
    </div>
  );
}
