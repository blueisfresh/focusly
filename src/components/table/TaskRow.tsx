import Link from "next/link";
import React from "react";

export default function TaskRow({
  children,
}: // keyProp,
{
  children: React.ReactNode;
  // keyProp: string;
}) {
  // Convert Children into an array
  const childrenArray = React.Children.toArray(children);

  // Check if the first child is a React.Fragment
  let fragmentChildren: React.ReactNode[] = [];
  const firstChild = childrenArray[0];

  if (React.isValidElement(firstChild) && firstChild.type === React.Fragment) {
    fragmentChildren = React.Children.toArray(firstChild.props.children);
  } else {
    fragmentChildren = childrenArray;
  }

  return (
    <tr className="bg-white hover:bg-gray-50">
      {/* Directly render the passed children (already <td>) */}
      {fragmentChildren.map((child, index) => (
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
