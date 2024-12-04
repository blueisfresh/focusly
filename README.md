# Focusly: TODO List App

## **Project Description**

Focusly is a TODO list application designed to help users stay organized, manage priorities, and receive timely notifications. The app emphasizes simplicity, usability, and seamless task management.

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

### **Drag-and-Drop Task Management**

- Evaluate and use either:
  - [Motion's React Reorder Library](https://motion.dev/docs/react-reorder).
  - [Swapy Library](https://swapy.tahazsh.com/).

### **Light and Dark Mode**

- Allow users to switch between light and dark themes for better accessibility and comfort.

## **Data Storage Approach**

- **JSON-Based Storage**: Tasks will be managed and structured as a JSON object.
- **Local Storage**: The JSON object will be saved in the browser's `localStorage` for persistence.
- **JSON Structure**: Building a robust and well-structured JSON schema will be foundational to the project.

## **Browser Compatibility**

Focusly will be tested and optimized for compatibility with major browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## **Error Handling**

The application will handle the following scenarios gracefully:

1. **Invalid JSON Import**:
   - Validate imported JSON files for correct structure and data types.
   - Show user-friendly error messages for invalid or corrupted files.
2. **Local Storage Full**:
   - Notify the user when localStorage reaches its limit.
   - Suggest exporting data to a JSON file to free up space.
3. **Task Overlap**:
   - Warn users if tasks with overlapping due dates are prioritized as High.
4. **Notification Permission Denied**:
   - Notify the user when browser notification permissions are denied.
   - Provide steps to enable notifications.
5. **Drag-and-Drop Errors**:
   - Handle cases where items fail to drop into valid containers.
   - Restore the previous state if drag-and-drop actions fail.
6. **Browser Incompatibility**:
   - Display a message if the browser lacks required features (e.g., outdated versions).
   - Suggest upgrading the browser for a better experience.
