// Let’s go **deep into Callback Functions in JavaScript**, from the **basics to advanced concepts**, with clear explanations and real-world examples.

// ---

// ##  **1. What is a Callback Function?**

// A **callback function** is a **function passed as an argument** to another function and executed later, **after some operation completes**.

// * **Key idea:**
//   Functions in JS are **first-class citizens**, meaning:

//   * They can be assigned to variables.
//   * Passed as arguments.
//   * Returned from other functions.

// ### **Basic Example**

// ```js
// function greet(name, callback) {
//   console.log(`Hello, ${name}`);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayBye);
// // Output:
// // Hello, Alice
// // Goodbye!
// ```

// ---

// ##  **2. Why Do We Need Callbacks?**

// Because **JavaScript is single-threaded and asynchronous**, callbacks allow us to:

// * Execute code **after a task completes** (e.g., fetching data from server).
// * Avoid blocking the main thread.

// ---

// ##  **3. Types of Callbacks**

// ### **(A) Synchronous Callbacks**

// Executed **immediately** within the calling function.

// ```js
// function calculate(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// calculate(3, 4, (sum) => console.log(`Sum is ${sum}`));
// // Output: Sum is 7
// ```

// ### **(B) Asynchronous Callbacks**

// Executed **later**, after an asynchronous operation (e.g., `setTimeout`, API calls).

// ```js
// console.log("Start");

// setTimeout(() => {
//   console.log("Callback executed after 2s");
// }, 2000);

// console.log("End");
// // Output:
// // Start
// // End
// // Callback executed after 2s
// ```

// ---

// ##  **4. Real-World Example**

// Fetching data with **callbacks** (old style before Promises):

// ```js
// function getData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched");
//     callback();
//   }, 2000);
// }

// getData(() => {
//   console.log("Processing data...");
// });
// // Output:
// // Data fetched
// // Processing data...
// ```

// ---

// ##  **5. The Problem: Callback Hell**

// When callbacks are nested deeply for multiple async operations:

// ```js
// getData(() => {
//   processData(() => {
//     saveData(() => {
//       console.log("All done!");
//     });
//   });
// });
// ```

// Looks like a **pyramid of doom** → hard to read and maintain.

// ---

// ##  **6. Solutions to Callback Hell**

// * **Promises**
// * **Async/Await**
//   (We use callbacks inside Promises too, but with better structure.)

// ---

// ##  **7. Important Features & Gotchas**

// ✔ Functions can be **anonymous**:

// ```js
// setTimeout(function() {
//   console.log("Anonymous callback");
// }, 1000);
// ```

// ✔ Or **arrow functions**:

// ```js
// setTimeout(() => console.log("Arrow callback"), 1000);
// ```

// ✔ Callbacks **don’t block the main thread**:

// ```js
// console.log("Before");
// setTimeout(() => console.log("Inside callback"), 0);
// console.log("After");
// // Output: Before → After → Inside callback
// ```

// ✔ **Error handling in callbacks**:

// ```js
// function doTask(successCallback, errorCallback) {
//   let success = false;
//   if(success) {
//     successCallback("Task completed!");
//   } else {
//     errorCallback("Task failed!");
//   }
// }

// doTask(
//   (msg) => console.log(msg),
//   (err) => console.error(err)
// );
// ```

// ---

// ##  **8. Higher-Order Functions and Callbacks**

// Callbacks are widely used in **Array methods**:

// ```js
// const numbers = [1, 2, 3];
// const squares = numbers.map(num => num * num);
// console.log(squares); // [1, 4, 9]
// ```

// Other methods using callbacks:

// * `map()`
// * `filter()`
// * `reduce()`
// * `forEach()`
// * `sort()`

// ---

// ##  **9. Advanced Use Cases**

// ### **Event Handling**

// ```js
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Button clicked!");
// });
// ```

// ### **Custom Callbacks**

// ```js
// function downloadFile(url, callback) {
//   console.log(`Downloading from ${url}...`);
//   setTimeout(() => {
//     console.log("Download complete");
//     callback();
//   }, 2000);
// }

// downloadFile("http://example.com", () => {
//   console.log("File saved successfully");
// });
// ```

// ---

// ##  **10. Callbacks in Real Projects**

// * Handling API responses (before Promises were popular).
// * Event-driven programming.
// * Reusable utilities like animation functions, debounce, throttle.
// * Game loops.

// ---

// ###  **Summary**

// * **Callback = Function passed as argument, executed later.**
// * Used for **asynchronous operations** (I/O, timers, API calls).
// * Leads to **callback hell**, solved by **Promises** & **async/await**.

// ---

// ****************************************************************

// function fetchData(callback) {
//     setTimeout(() => {
//       console.log("fetch the data");
//       callback();
//     }, 1000);
//   }

//   function convertData(callback) {
//     setTimeout(() => {
//       console.log("data converted");
//       callback();
//     }, 1000);
//   }

//   function displayData() {
//     setTimeout(() => {
//       console.log("Display the data");
//     }, 1000);
//   }

//   A callback function is a function that is passed as an argument to another function and executed later.

//  A function can accept another function as a parameter.
//  Callbacks allow one function to call another at a later time.
//  A callback function can execute after another function has finished.

//************   example 1  *************

// function greet(name, callback) {
//   console.log("Hi" + " " + name);
//   callback();
// }

// function callMe() {
//   console.log("Im a callback function");
// }

// greet("john", callMe);

//  Where Are Callbacks Used?
// 1. Handling Asynchronous Operations
//    Callbacks are widely used in

// API requests (fetching data)
// Reading files (Node.js file system)
// Event listeners (clicks, keyboard inputs)
// Database queries (retrieving data)

//   2. Callbacks in Functions Handling Operations
//   When a function needs to execute different behaviors based on input, callbacks make        the     function flexible.

// Callbacks in Event Listeners

// document
//   .getElementById("myButton")
//   .addEventListener("click", function () {
//     console.log("Button clicked!");
//   });

// ***************  Problems with Callbacks ****************
//   1. Callback Hell (Nested Callbacks)

//       When Does Callback Hell Happen?
// JavaScript is known for its asynchronous nature. This means that certain operations (like fetching data from a server, reading a file, or setting a timer) don’t block the rest of the code from executing, so these operations execute in the background, and when these operations are completed, a callback function is invoked to handle the result.

// When we chain multiple asynchronous operations and each operation is dependent on the previous one we need to nest callbacks within callbacks. If this nesting continues it becomes hard to manage the code and creates complex code. This situation is known as the callback hell.

//       Why is Callback Hell Problematic?
// Difficult to Read: In callback hell there is the nested callbacks due to which the code becomes hard to understand.
// Hard to Maintain: When we try to add some new features or make changes in the nested callback it becomes challenging.
// Error Handling: With deeply nested callbacks error handling becomes more difficult.

//example1

// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed");
//     });
//   });
// });

// example2;
// function fetchData(callback) {
//   console.log("Data fetched");
//   callback();
// }

// function processData(callback) {
//   console.log("Data processed");
//   callback();
// }

// function displayData() {
//   console.log("Data displayed");
// }

// fetchData(function () {
//   processData(function () {
//     displayData();
//   });
// });
