"use client";

import Table from "@/components/table/TaskTable";
import { useKeyPress } from "@/hooks/useKeyPress";
import useTaskStore from "@/store/taskStore";
import { use, useCallback, useEffect } from "react";

export default function Home() {
  const pressedKeys = useKeyPress();
  const clearTasks = useTaskStore((state) => state.clearTasks);

  useEffect(() => {
    if (pressedKeys.has("Control") && pressedKeys.has("i")) {
      console.log("Control + i was pressed");
      clearTasks();
      console.log("The local storage got cleared");
    }
  }, [pressedKeys]);

  return (
    <main>
      <Table />
    </main>
  );
}
