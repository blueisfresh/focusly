# Focusly: TODO List App

## **Project Description**

Focusly is a TODO list application designed to help users stay organized, manage priorities, and receive timely notifications. The app emphasizes simplicity, usability, and seamless task management.

---

## **Core Features**

### **Task Management**

- Add, edit, delete tasks.
- Mark tasks as complete or incomplete.
- **Task Prioritization**
  - Assign priority levels: High, Medium, Low.

### **Filtering and Sorting**

- Filter tasks by:
  - Status: Completed, Pending.
  - Priority level.
- Sort tasks by deadline or creation date.

### **Notifications**

- Receive reminders for:
  - Upcoming tasks.
  - Overdue tasks.

### **Table-Based Layout**

- Tasks are displayed in a table format.
- Sorting, filtering, and row-specific actions are managed efficiently.
- Clicking on a task row redirects to its detailed view.

### **Light and Dark Mode**

- Allow users to switch between light and dark themes for better accessibility and comfort.

---

## **Project Structure**

### **Folder Structure**

```plaintext
focusly/
├── public/                  # Static assets (e.g., icons, logos)
├── src/
│   ├── app/                 # Pages and layouts
│   │   ├── layout.tsx       # Layout wrapper for all pages
│   │   ├── home/page.tsx    # Home page with TaskTable
│   │   ├── about/page.tsx   # About the application
│   │   ├── import/page.tsx  # Page for JSON import
│   │   ├── task/[id]/page.tsx # Dynamic page for detailed task view
│   │   ├── add/page.tsx     # Page to add a new task
│   │   └── edit/[id]/page.tsx # Page to edit a task
│   ├── components/          # Reusable UI components
│   │   ├── TaskTable.tsx    # Table to display tasks
│   │   ├── TaskRow.tsx      # Represents a single table row
│   │   ├── TaskForm.tsx     # Add/Edit task form
│   │   └── Notification.tsx # Notification popup component
│   ├── hooks/               # Custom React hooks
│   │   └── useNotifications.ts # Hook for managing notifications
│   ├── store/               # Zustand store for task state
│   │   └── taskStore.ts     # Task state management
│   ├── types/               # TypeScript interfaces/types
│   │   └── task.ts          # Task type definitions
│   ├── utils/               # Utility functions
│   │   └── validateTask.ts  # Task validation logic
└── package.json             # Dependencies
```

### **Component Interactions**

1. **TaskTable**

   - Responsible for displaying tasks in a table layout.
   - Manages filtering and sorting logic.
   - Passes each task as a prop to `TaskRow`.

2. **TaskRow**

   - Represents a single row in the table.
   - Handles row-specific actions (e.g., edit, delete).
   - Includes an anchor tag to redirect to the detailed view page.

3. **TaskForm**

   - Used for both adding and editing tasks.
   - Validates input using `validateTask.ts`.

4. **Notification**
   - Displays reminders for upcoming or overdue tasks.

### **State Management with Zustand**

- Zustand handles the task array and its operations globally.
- Actions include:
  - Adding a task (`addTask`).
  - Updating a task (`updateTask`).
  - Deleting a task (`deleteTask`).
  - Importing/exporting tasks (`setTasks`).

### **Task Validation**

- The `validateTask.ts` utility ensures task data integrity:
  - Checks required fields like title and due date.
  - Validates priority levels and date formats.
- This logic is used across components for consistent validation.

---

## **Browser Compatibility**

Focusly is optimized for:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## **Error Handling**

- **Invalid Inputs**: User-friendly validation errors are shown for incorrect data.
- **Notification Denial**: Clear steps provided to enable browser notifications.
- **JSON Import Errors**: Invalid files are rejected with detailed error messages.

---

## **How to Run**

1. Clone the repository:

   ```bash
   git clone https://github.com/username/focusly.git
   cd focusly
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

Focusly makes task management simple, efficient, and accessible!
