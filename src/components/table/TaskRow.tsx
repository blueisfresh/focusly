import Link from "next/link";

export default function TaskRow({
  children,
  keyProp,
}: {
  children: React.ReactNode;
  keyProp: string;
}) {
  return (
    <tr className="bg-white hover:bg-gray-50">
      {/* Task Name with Link */}
      <td scope="row" className="px-6 py-4 font-medium text-gray-900">
        <Link href={`/${keyProp}`} className="text-blue-500 hover:underline">
          {children}
        </Link>
      </td>
      <td scope="row" className="px-6 py-4 font-medium text-gray-900">
        <p>Priority</p>
      </td>
      <td scope="row" className="px-6 py-4 font-medium text-gray-900">
        <p>Due Date</p>
      </td>
      <td scope="row" className="px-6 py-4 font-medium text-gray-900">
        <p>Completed</p>
      </td>
      {/* Edit Icon or Image */}
      <td className="px-6 py-4 text-right w-30 hover:bg-slate-100">
        <img
          src="https://utfs.io/f/MOA66ou6ZmXlgI7mQfAYaOBp7g4E5Yrd189ynuqlhGPX06oM"
          alt="Edit Icon"
          className="h-8 w-8 cursor-pointer"
        />
      </td>
    </tr>
  );
}
