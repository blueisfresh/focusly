export default function Page() {
  return (
    <div className="max-w-[800px] mx-auto leading-8 py-10 px-6 bg-gray-50 shadow-md rounded-md">
      <article>
        <header>
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Focusly: TODO List App
          </h1>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Project Description
          </h2>
          <p className="text-gray-600">
            Focusly is a TODO list application designed to help users stay
            organized, manage priorities, and receive timely notifications. The
            app emphasizes simplicity, usability, and seamless task management.
          </p>
        </section>

        <hr className="my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Core Features
          </h2>

          <article className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Task Management
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Add, edit, delete tasks.</li>
              <li>Mark tasks as complete or incomplete.</li>
              <li>
                <strong>Task Prioritization:</strong>
                <ul className="list-disc pl-6">
                  <li>Assign priority levels: High, Medium, Low.</li>
                </ul>
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Filtering and Sorting
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Filter tasks by:
                <ul className="list-disc pl-6">
                  <li>Status: Completed, Pending.</li>
                  <li>Priority level.</li>
                </ul>
              </li>
              <li>Sort tasks by deadline or creation date.</li>
            </ul>
          </article>

          <article className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Notifications
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Receive reminders for:
                <ul className="list-disc pl-6">
                  <li>Upcoming tasks.</li>
                  <li>Overdue tasks.</li>
                </ul>
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Table-Based Layout
            </h3>
            <p className="text-gray-600">
              Tasks are displayed in a table format, with sorting, filtering,
              and row-specific actions managed efficiently. Clicking on a task
              row redirects to its detailed view.
            </p>
          </article>

          <article className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Light and Dark Mode
            </h3>
            <p className="text-gray-600">
              Allow users to switch between light and dark themes for better
              accessibility and comfort.
            </p>
          </article>
        </section>

        <hr className="my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Project Structure
          </h2>

          <article className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Folder Structure
            </h3>
            <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-600">
              {`focusly/
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
└── package.json             # Dependencies`}
            </pre>
          </article>

          <article className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Component Interactions
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                <strong>TaskTable:</strong> Displays tasks in a table layout,
                manages filtering, sorting, and passes tasks to `TaskRow`.
              </li>
              <li>
                <strong>TaskRow:</strong> Represents a single table row, handles
                row-specific actions, and links to task details.
              </li>
              <li>
                <strong>TaskForm:</strong> Validates and processes input for
                adding and editing tasks.
              </li>
              <li>
                <strong>Notification:</strong> Handles reminders for tasks.
              </li>
            </ul>
          </article>
        </section>

        <hr className="my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Browser Compatibility
          </h2>
          <p className="text-gray-600">
            Focusly is optimized for compatibility with major browsers:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Microsoft Edge</li>
            <li>Safari</li>
          </ul>
        </section>

        <hr className="my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Error Handling
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              Invalid JSON imports are validated and rejected if incorrect.
            </li>
            <li>Users are notified when browser notifications are denied.</li>
            <li>Clear steps are provided for enabling browser features.</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
