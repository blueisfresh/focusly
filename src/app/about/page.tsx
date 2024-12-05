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

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Core Features
          </h2>

          <article className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Task Management
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Add, edit, and delete tasks.</li>
              <li>Mark tasks as complete or incomplete.</li>
              <li>
                <strong>Task Prioritization:</strong>
                <ul className="list-circle pl-6">
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
                <ul className="list-circle pl-6">
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
                <ul className="list-circle pl-6">
                  <li>Upcoming tasks.</li>
                  <li>Overdue tasks.</li>
                </ul>
              </li>
            </ul>
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

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Data Storage Approach
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              <strong>JSON-Based Storage:</strong> Tasks will be managed and
              structured as a JSON object.
            </li>
            <li>
              <strong>Local Storage:</strong> The JSON object will be saved in
              the browser's{" "}
              <code className="bg-gray-100 p-1 rounded">localStorage</code> for
              persistence.
            </li>
            <li>
              <strong>JSON Structure:</strong> Building a robust and
              well-structured JSON schema will be foundational to the project.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Browser Compatibility
          </h2>
          <p className="text-gray-600">
            Focusly will be tested and optimized for compatibility with major
            browsers:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Microsoft Edge</li>
            <li>Safari</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Error Handling
          </h2>
          <p className="text-gray-600">
            The application will handle the following scenarios gracefully:
          </p>
          <ol className="list-decimal pl-6 text-gray-600">
            <li>
              <strong>Invalid JSON Import:</strong>
              <ul className="list-circle pl-6">
                <li>
                  Validate imported JSON files for correct structure and data
                  types.
                </li>
                <li>
                  Show user-friendly error messages for invalid or corrupted
                  files.
                </li>
              </ul>
            </li>
            <li>
              <strong>Local Storage Full:</strong>
              <ul className="list-circle pl-6">
                <li>
                  Notify the user when{" "}
                  <code className="bg-gray-100 p-1 rounded">localStorage</code>{" "}
                  reaches its limit.
                </li>
                <li>Suggest exporting data to a JSON file to free up space.</li>
              </ul>
            </li>
            <li>
              <strong>Task Overlap:</strong>
              <ul className="list-circle pl-6">
                <li>
                  Warn users if tasks with overlapping due dates are prioritized
                  as High.
                </li>
              </ul>
            </li>
            <li>
              <strong>Notification Permission Denied:</strong>
              <ul className="list-circle pl-6">
                <li>
                  Notify the user when browser notification permissions are
                  denied.
                </li>
                <li>Provide steps to enable notifications.</li>
              </ul>
            </li>
            <li>
              <strong>Browser Incompatibility:</strong>
              <ul className="list-circle pl-6">
                <li>
                  Display a message if the browser lacks required features
                  (e.g., outdated versions).
                </li>
                <li>Suggest upgrading the browser for a better experience.</li>
              </ul>
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
