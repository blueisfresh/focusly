export default function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="bg-white hover:bg-gray-50">
      <td scope="row" className="px-6 py-4 font-medium text-gray-900">
        {children}
      </td>
      <td className="px-6 py-4 text-right w-30 hover:bg-slate-100">
        <img
          src="https://utfs.io/f/MOA66ou6ZmXlgI7mQfAYaOBp7g4E5Yrd189ynuqlhGPX06oM"
          alt="Logo"
          className="h-8 w-8"
        />
      </td>
    </tr>
  );
}
