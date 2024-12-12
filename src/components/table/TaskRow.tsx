import Link from "next/link";
import React from "react";

export default function TaskRow({
  children,
}: // keyProp,
{
  children: React.ReactNode;
  // keyProp: string;
}) {
  const childrenArray = React.Children.toArray(children);

  // Check if the first child is a React.Fragment
  const firstChild = childrenArray[0];
  let fragmentChildren: any[] = [];

  if (React.isValidElement(firstChild) && firstChild.type === React.Fragment) {
    fragmentChildren = React.Children.toArray(firstChild.props.children);
  }

  // Log the fragment children array
  // console.log(
  //   "The fragment children array inside the TaskRow component is:",
  //   fragmentChildren
  // );

  // Extract priority from fragmentChildren
  const priority = fragmentChildren[1]?.props.children;

  // Determine the image URL based on priority
  const getPriorityImage = (priority: any) => {
    switch (priority) {
      case "High":
        return "https://utfs.io/f/MOA66ou6ZmXlRmeSRYBLSkIZTfAFlrzPwRWxGtMy02nKCovm";
      case "Medium":
        return "https://utfs.io/f/MOA66ou6ZmXloe1KhUX5AQLy6P9ghUbHvNeiJEVBKnWu74R2";
      case "Low":
        return "https://utfs.io/f/MOA66ou6ZmXluXeQf2LodR0DtqXI9bGcx48gCv16aSYJen5k";
      default:
        return "https://utfs.io/f/MOA66ou6ZmXl0evFk0Ie9YtB5DXH3yuvq2SMFNOfrKwsxh4E";
    }
  };

  return (
    <tr className="bg-white hover:bg-gray-50">
      {fragmentChildren.map((child, index) => (
        <td
          key={index}
          scope="row"
          className="px-6 py-4 font-medium text-gray-900"
        >
          {child}
        </td>
      ))}

      {/* <td scope="row" className="px-6 py-4 font-medium text-gray-900">
        <img src={getPriorityImage(priority)} alt={`${priority} priority`} />
      </td> */}

      {/* Edit Icon or Image */}
      <td className="px-6 py-4 text-right w-30 hover:bg-slate-100">
        <img
          src="https://utfs.io/f/MOA66ou6ZmXlgI7mQfAYaOBp7g4E5Yrd189ynuqlhGPX06oM"
          alt="Edit Icon"
          className="h-8 w-8 cursor-pointer"
        />
      </td>
      {/* Delete Icon or Image */}
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
