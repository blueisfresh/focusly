Here are two distinct architectural approaches for your task management problem, each addressing the challenges in different ways.

---

## **Approach 1: Centralized State with a Global Store (Redux or Zustand)**

### Overview

In this approach, we use a global state management library like Redux or Zustand. The task array (`rows`) and operations (`addTask`, `deleteTask`, etc.) are managed in a centralized store, making the state accessible across all components without prop drilling or passing context.

### Implementation

#### **1. Install Zustand (Lightweight State Management Library)**

```bash
npm install zustand
```

#### **2. Create the Store**

Create a `taskStore.ts` file:

```tsx
import create from "zustand";

interface Task {
  key: string;
  content: string;
  description: string;
}

interface TaskStore {
  rows: Task[];
  addTask: (taskName: string, description: string) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  rows: [
    {
      key: "1",
      content: "Grocery Shopping",
      description:
        "Buy fruits, vegetables, milk, and bread from the supermarket.",
    },
    {
      key: "2",
      content: "Workout",
      description: "30 minutes of cardio and stretching.",
    },
    {
      key: "3",
      content: "Presentation Prep",
      description: "Prepare slides for Monday's meeting.",
    },
  ],
  addTask: (taskName, description) =>
    set((state) => ({
      rows: [
        ...state.rows,
        { key: `${Date.now()}`, content: taskName, description },
      ],
    })),
}));
```

#### **3. Use the Store in Components**

**Table Component:**

```tsx
import React from "react";
import { useTaskStore } from "../store/taskStore";

export default function Table() {
  const rows = useTaskStore((state) => state.rows);

  return (
    <table className="w-full table-fixed">
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((task) => (
          <tr key={task.key}>
            <td>{task.content}</td>
            <td>{task.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

**Task Modal:**

```tsx
import React, { useState } from "react";
import { useTaskStore } from "../store/taskStore";

export default function TaskModal({ onClose }: { onClose: () => void }) {
  const addTask = useTaskStore((state) => state.addTask);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    addTask(taskName, description);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add Task</h2>
      <input value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
```

---

## **Approach 2: Server-Side Rendering (SSR) with Persistent Backend**

### Overview

In this architecture, we manage the tasks on the server. The tasks are fetched dynamically on page load and updated through API calls. This ensures persistence and avoids client-side state management complexities.

### Implementation

#### **1. Create an API Endpoint**

In Next.js, create an API route to handle task operations:

**`pages/api/tasks.ts`**

```tsx
import { NextApiRequest, NextApiResponse } from "next";

let tasks = [
  { key: "1", content: "Grocery Shopping", description: "Buy groceries." },
  { key: "2", content: "Workout", description: "Do cardio and stretch." },
  { key: "3", content: "Presentation Prep", description: "Create slides." },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(tasks);
  } else if (req.method === "POST") {
    const { content, description } = req.body;
    const newTask = { key: `${Date.now()}`, content, description };
    tasks.push(newTask);
    return res.status(201).json(newTask);
  }
}
```

#### **2. Fetch Tasks on the Server**

Use `getServerSideProps` to fetch tasks and pass them to the client.

**`pages/index.tsx`**

```tsx
import React, { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();
  return { props: { tasks } };
}

export default function Home({ tasks }: { tasks: any[] }) {
  const [rows, setRows] = useState(tasks);

  const addTask = async (taskName: string, description: string) => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: taskName, description }),
    });
    const newTask = await res.json();
    setRows((prevRows) => [...prevRows, newTask]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((task) => (
            <tr key={task.key}>
              <td>{task.content}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() =>
          addTask("New Task", "This is a new task from the server!")
        }
      >
        Add Task
      </button>
    </div>
  );
}
```

#### **3. Benefits**

- The tasks are persistent, stored on the server.
- No client-side state management complexities.
- The application remains fast and stateless on the client.

---

## **Comparison of Both Approaches**

| Feature              | **Approach 1: Zustand**         | **Approach 2: SSR with API**         |
| -------------------- | ------------------------------- | ------------------------------------ |
| **State Management** | Client-side with Zustand        | Server-side with API and SSR         |
| **Data Persistence** | Temporary (reset on refresh)    | Persistent (stored on server)        |
| **Complexity**       | Simple to implement             | Requires API and server coordination |
| **Performance**      | Fast (local state)              | Slightly slower (network requests)   |
| **Best for**         | Simple apps without persistence | Apps needing data persistence        |

---

Both approaches cater to different needs. For a lightweight app without data persistence, **Approach 1** is simpler. For apps requiring persistence, **Approach 2** ensures robustness with server-side logic.
