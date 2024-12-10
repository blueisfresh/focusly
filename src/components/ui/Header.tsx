"use client";

import { useEffect, useState } from "react";
import { parseJSONFile } from "../../utils/jsonHandler";
import useTaskStore from "../../store/taskStore";

const navLinks = [
  {
    href: "/about",
    label: "About",
  },
];

export default function Header() {
  const setTasks = useTaskStore((state) => state.setTasks);
  const exportTasks = useTaskStore((state) => state.exportTasks);
  const tasks = useTaskStore((state) => state.tasks);

  const [fileLoaded, setFileLoaded] = useState<boolean>(false);

  useEffect(() => {
    console.log("Tasks updated:", tasks); // Logs whenever tasks change
  }, [tasks]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleFileUpload triggered");
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];

      console.log(`file selected: ${file.name}`);

      // Parse the JSON file
      parseJSONFile(file, (parsedData) => {
        console.log("Parsed Data:", parsedData);

        // Update Zustand state with the parsed tasks
        setTasks(parsedData);

        // Set fileLoaded to true only after tasks are set
        setFileLoaded(true);
      });
    }
  };

  const handleLabelClick = () => {
    console.log("handleLabelClick triggered");
    console.log(`fileLoaded: ${fileLoaded}`);
    if (fileLoaded) {
      // If "Export", call the export function
      console.log("Exporting tasks...");
      exportTasks();
    }
  };

  return (
    <header>
      <nav className="m-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://utfs.io/f/MOA66ou6ZmXlNmtebPgAibelTwJZ3AvY5MBKsknp2dqmjUaP"
              alt="Logo"
              className="h-20 w-20"
            />
            <h1 className="text-4xl md:text-5xl font-bold md:hover:text-slate-500">
              Focusly
            </h1>
          </a>
          <ul className="font-medium flex flex-col md:flex-row md:items-center p-4 mt-4 md:mt-0">
            {" "}
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-xl py-4 px-6 text-slate-900 md:hover:text-slate-500 md:p-0 md:mr-6"
                >
                  <a href={link.href}>{link.label}</a>
                  {/* About Page should read the Markdown File */}
                </li>
              );
            })}
            <li className="text-xl py-4 px-6 text-slate-900 md:hover:text-slate-500 md:p-0 md:mr-6">
              {/* if no json file is read import instead */}

              <label
                htmlFor={!fileLoaded ? "file-upload" : undefined}
                onClick={handleLabelClick}
                className="text-white text-xl bg-slate-700 hover:bg-slate-800 font-medium rounded-lg px-5 py-2.5 cursor-pointer"
              >
                {fileLoaded ? `Export` : "Import"}
              </label>

              {/* Completely Hidden File Input */}
              <input
                id="file-upload"
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
