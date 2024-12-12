"use client";

import Table from "@/components/table/TaskTable";
import useTaskStore from "@/store/taskStore";
import { use, useCallback, useEffect } from "react";
import { useKeyPress } from "../hooks/useKeyPress";

export default function Home() {
  const pressedKeys = useKeyPress();
  const clearTasks = useTaskStore((state) => state.clearTasks);
  // const isFileLoaded = useTaskStore((state) => state.isFileLoaded);
  const setFileLoaded = useTaskStore((state) => state.setfileLoaded);

  useEffect(() => {
    if (pressedKeys.has("Control") && pressedKeys.has("i")) {
      console.log("Control + i was pressed");
      clearTasks();
      console.log("The local storage got cleared");
      setFileLoaded(false);
      console.log("The fileLoaded state got set to false");
    }
  }, [pressedKeys]);

  return (
    <main>
      <Table />
    </main>
  );
}
