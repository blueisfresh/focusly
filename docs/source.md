- https://flowbite.com/docs/components/navbar/
- https://tailwindcss.com/docs/customizing-colors

<!-- import Link from 'next/link';

const TaskLink = ({ id }) => (
  <Link href={`/task/${id}`}>
    <a>View Task</a>
  </Link>
); -->

## Merging Example Commands

To merge feature/restructured-architecture into dev:

```bash
# Switch to dev branch

git checkout dev

# Merge changes from feature/restructured-architecture

git merge feature/restructured-architecture

# Push the updated dev branch to remote

git push origin dev
```

To merge dev into main:

```bash
# Switch to main branch
git checkout main

# Merge changes from dev
git merge dev

# Push the updated main branch to remote

git push origin main
```

## Explanation local storage

To use `localStorage` effectively, here’s the breakdown of what you need to do:

---

### **1. Setting Data in `localStorage`**

You save data into `localStorage` using `localStorage.setItem(key, value)`:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

- **`"tasks"`**: This is the **key** used to identify your stored data.
- **`JSON.stringify(tasks)`**: This converts the `tasks` array into a string, as `localStorage` can only store strings.

---

### **2. Reading Data from `localStorage`**

You retrieve data using `localStorage.getItem(key)`:

```javascript
const storedTasks = localStorage.getItem("tasks");
if (storedTasks) {
  const parsedTasks = JSON.parse(storedTasks); // Converts the string back into a JavaScript object/array
  console.log(parsedTasks); // Logs the parsed tasks to the console
}
```

- **`localStorage.getItem("tasks")`**: Retrieves the string associated with the key `"tasks"`.
- **`JSON.parse(storedTasks)`**: Converts the string back into a usable array or object.

---

### **3. Clearing Data in `localStorage`**

You can remove specific data or clear everything:

1. **Remove Data by Key**:
   ```javascript
   localStorage.removeItem("tasks");
   ```
2. **Clear All Data**:
   ```javascript
   localStorage.clear();
   ```

---

### **Viewing `localStorage` in Developer Tools**

1. **Open DevTools**:

   - In most browsers, press `F12` or right-click and choose **Inspect**.

2. **Go to the `Application` Tab**:

   - In Chrome/Edge/Firefox, navigate to the `Application` tab in DevTools.
   - Look for **Storage** > **Local Storage** in the left-hand menu.

3. **Select Your Website**:

   - Under `Local Storage`, select your website (e.g., `http://localhost:3000`).

4. **View the Data**:
   - You’ll see all keys and their corresponding values listed in a table.
   - For example:
     ```
     Key     | Value
     --------|----------------
     tasks   | [{"id":1,"title":"Sample Task","completed":false}]
     ```

---

### **Using `console.log` to Debug `localStorage`**

To debug or inspect what’s in `localStorage`, use the following:

1. **Log All `localStorage`**:

   ```javascript
   console.log(localStorage);
   ```

   This will show all stored keys and values.

2. **Log a Specific Key**:

   ```javascript
   console.log(localStorage.getItem("tasks"));
   ```

   This shows the value associated with the key `"tasks"`.

3. **Verify Stored Data**:
   ```javascript
   const tasks = localStorage.getItem("tasks");
   console.log("Stored tasks:", JSON.parse(tasks)); // Logs the parsed tasks array
   ```

---

### Example Integration

Here’s how you might integrate `localStorage` into your app:

#### Initialization (Reading Stored Data):

```javascript
const storedTasks = localStorage.getItem("tasks");
if (storedTasks) {
  const parsedTasks = JSON.parse(storedTasks);
  setTasks(parsedTasks); // Use Zustand or React state to initialize tasks
}
```

#### Updating (Setting New Data):

```javascript
setTasks: (newTasks) => {
  localStorage.setItem("tasks", JSON.stringify(newTasks));
  set({ tasks: newTasks });
},
```

#### Clearing Data:

```javascript
clearTasks: () => {
  localStorage.removeItem("tasks"); // Remove from localStorage
  set({ tasks: [] }); // Clear Zustand or React state
},
```
