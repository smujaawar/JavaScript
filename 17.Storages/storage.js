// **Storage in JavaScript** generally refers to ways of storing data on the **client (browser)** or **server**, and even in-memory during program execution.

// let's break it down step by step:

// ---

// ##  **1. Types of Storage in JavaScript**

// There are several layers of storage you deal with in JS:

// ### **A) In-Memory Storage (during runtime)**

// * Variables, arrays, objects live in **RAM**.
// * Cleared when:

//   * Function ends (local variables).
//   * Page reloads or tab closes.
// * Examples:

//   ```javascript
//   let x = 10;
//   const obj = { name: "Alice" };
//   ```
// * **Scope-based** (function, block, global).

// ---

// ### **B) Browser Storage (Persistent on client side)**

// For persisting data across page reloads or sessions, the browser provides:

// #### **(i) `localStorage`**

// * Stores **key-value pairs** as strings.
// * **Persistent**: survives page reload and browser restart.
// * Max size: \~5-10 MB per origin.
// * API:

//   ```javascript
//   localStorage.setItem("username", "Alice");
//   console.log(localStorage.getItem("username")); // "Alice"
//   localStorage.removeItem("username");
//   localStorage.clear();
//   ```
// *  Use case: Remember user settings, theme, small data.

// ---

// #### **(ii) `sessionStorage`**

// * Similar to `localStorage`, but:

//   * Data lasts only for the **browser tab session**.
//   * Closing the tab clears it.
// * Example:

//   ```javascript
//   sessionStorage.setItem("token", "12345");
//   ```
// *  Use case: Temporary data for a session (e.g., form progress).

// ---

// #### **(iii) `Cookies`**

// * Oldest method for storage.
// * Stored as **key-value pairs** in the browser and sent to the server with each HTTP request.
// * **Size limit**: \~4 KB.
// * Can have expiry.
// * Example:

//   ```javascript
//   document.cookie = "user=Alice; max-age=3600; path=/";
//   ```
// *  Use case: Authentication (session IDs), tracking.

// ---

// #### **(iv) IndexedDB**

// * A **NoSQL database** inside the browser.
// * Stores large, structured data.
// * Async API.
// * Example:

//   ```javascript
//   let request = indexedDB.open("myDB", 1);
//   request.onsuccess = () => console.log("DB opened");
//   ```
// *  Use case: Offline apps, caching large datasets.

// ---

// #### **(v) Cache Storage (Service Workers)**

// * Part of **Progressive Web Apps**.
// * Stores **network requests and responses** for offline use.
// * Example:

//   ```javascript
//   caches.open("v1").then(cache => cache.add("/index.html"));
//   ```
// *  Use case: Offline-first apps, PWA caching.

// ---

// ---

// ### **C) Server-Side Storage**

// JavaScript (Node.js) can store data in:

// * **Databases** (MongoDB, MySQL, Redis, etc.).
// * **File system**.

// But these are beyond client-side storage.

// ---

// ---

// ##  **2. Comparison Table**

// | Feature        | localStorage | sessionStorage | Cookies      | IndexedDB        |
// | -------------- | ------------ | -------------- | ------------ | ---------------- |
// | Persistence    | Permanent    | Tab only       | Configurable | Permanent        |
// | Size Limit     | \~5-10 MB    | \~5 MB         | \~4 KB       | 100+ MB          |
// | Sent to Server | No           | No             | Yes          | No               |
// | Data Type      | String only  | String only    | String only  | Any (structured) |

// ---

// ---

// ##  **3. Real-Time Examples**

// * **localStorage**: Remember dark mode setting, last visited page.
// * **sessionStorage**: Store shopping cart for a session.
// * **Cookies**: Keep user logged in.
// * **IndexedDB**: Store user’s offline data in a note-taking app.
// * **Cache Storage**: Offline web apps.

// ---

// ---

// ##  **4. Advantages & Disadvantages**

// ### **localStorage / sessionStorage**

// ✔ Easy to use
// ✔ More space than cookies
// ✖ Only strings
// ✖ Not secure (visible in DevTools)

// ### **Cookies**

// ✔ Works with server
// ✖ Small size
// ✖ Slower (sent on every request)

// ### **IndexedDB**

// ✔ Stores huge data
// ✔ Structured (objects, blobs)
// ✖ API is complex

// ---

// ---

// ##  **5. Most Asked Interview Questions**

// 1. Difference between `localStorage`, `sessionStorage`, and cookies?
// 2. Does `localStorage` work across tabs?

//    * **Yes**, same origin shares localStorage.
// 3. Is `localStorage` secure?

//    * No, accessible via JS → XSS attacks.
// 4. How much data can you store in localStorage?
// 5. Can you store objects in localStorage?

//    * Yes, but you must use `JSON.stringify()` and `JSON.parse()`.
// 6. Difference between IndexedDB and localStorage?
// 7. Why is cookies size so small?
// 8. When would you use IndexedDB instead of localStorage?

// ---

// --- How to store and utilize data from local storages********

// `localStorage` works as a **key-value storage** where both key and value are strings. Here’s a clear guide with examples:

// ---

// ##  **1. Storing Data in `localStorage`**

// Use **`localStorage.setItem(key, value)`**:

// ```javascript
// // Store a simple string
// localStorage.setItem("username", "Alice");
// ```

// ---

// ##  **2. Retrieving Data**

// Use **`localStorage.getItem(key)`**:

// ```javascript
// const name = localStorage.getItem("username");
// console.log(name); // "Alice"
// ```

// ---

// ##  **3. Removing Data**

// Use **`localStorage.removeItem(key)`**:

// ```javascript
// localStorage.removeItem("username");
// ```

// ---

// ##  **4. Clear All Data**

// Use **`localStorage.clear()`**:

// ```javascript
// localStorage.clear();
// ```

// ---

// ##  **5. Storing Objects / Arrays**

// `localStorage` can only store **strings**, so you must convert objects to JSON.

// ```javascript
// // Store object
// const user = { name: "Alice", age: 25 };
// localStorage.setItem("user", JSON.stringify(user));

// // Retrieve object
// const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser.name); // Alice
// ```

// ---

// ##  **6. Check if Key Exists**

// ```javascript
// if (localStorage.getItem("username")) {
//   console.log("Username exists!");
// }
// ```

// ---

// ##  **7. Loop Through All Keys**

// ```javascript
// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   console.log(`${key}: ${localStorage.getItem(key)}`);
// }
// ```

// ---

// ###  **Real Example: Remember User’s Theme**

// ```javascript
// // Save user preference
// function saveTheme(theme) {
//   localStorage.setItem("theme", theme);
// }

// // Apply theme on load
// function applyTheme() {
//   const theme = localStorage.getItem("theme") || "light";
//   document.body.className = theme;
// }

// saveTheme("dark");  // Set dark theme
// applyTheme();       // Apply it even after page reload
// ```

//************ JSON.stringify() and JSON.parse() ****************

// These two methods are **key for handling objects and arrays in storage** because `localStorage` and `sessionStorage` only support **strings**.

// ---

// ##  **What is `JSON.stringify()`?**

// * Converts a **JavaScript object or array into a JSON string**.
// * Necessary when storing complex data in `localStorage`, `sessionStorage`, or sending over a network.

// ### **Example:**

// ```javascript
// const user = { name: "Alice", age: 25 };

// // Convert object to string
// const userString = JSON.stringify(user);
// console.log(userString);
// // Output: '{"name":"Alice","age":25}'
// ```

// ---

// ##  **What is `JSON.parse()`?**

// * Converts a **JSON string back into a JavaScript object or array**.
// * Used when retrieving stored data from localStorage/sessionStorage.

// ### **Example:**

// ```javascript
// const userString = '{"name":"Alice","age":25}';

// // Convert string back to object
// const userObject = JSON.parse(userString);
// console.log(userObject.name); // Output: Alice
// ```

// ---

// ##  **How They Work Together in Storage**

// ```javascript
// // Original object
// const user = { name: "Alice", age: 25 };

// // Store in localStorage (must be string)
// localStorage.setItem("user", JSON.stringify(user));

// // Retrieve and convert back to object
// const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser.age); // 25
// ```

// ---

// ##  **With Arrays**

// ```javascript
// const colors = ["red", "blue", "green"];

// // Store
// localStorage.setItem("colors", JSON.stringify(colors));

// // Retrieve
// const storedColors = JSON.parse(localStorage.getItem("colors"));
// console.log(storedColors[1]); // blue
// ```

// ---

// ###  **Key Points**

// ✔ **`JSON.stringify()`** → Object → String
// ✔ **`JSON.parse()`** → String → Object
// ✔ Only works with valid JSON (double quotes, no functions, no `undefined`)
// ✔ If string is invalid JSON, `JSON.parse()` throws an error

// ---

//  **Common Interview Question**:
// **Q:** Why do we need `JSON.stringify()` for localStorage?
// **A:** Because localStorage only stores **strings**, not objects or arrays.

// ---
