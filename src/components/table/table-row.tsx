import Link from "next/link";

export default function TableRow({
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

// Helper function to create a new TableRow
export function createNewRow(taskname: string, keyProp: string): JSX.Element {
  return (
    <TableRow keyProp={keyProp} key={keyProp}>
      {taskname}
    </TableRow>
  );
}
