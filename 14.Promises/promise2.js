// Let’s break down **Promises in JavaScript** in a structured way:

// ---

// ##  **What is a Promise in JavaScript?**

// A **Promise** is an object representing the eventual **completion (fulfilled)** or **failure (rejected)** of an asynchronous operation and its resulting value.

// ### **Key Points**

// * Introduced in **ES6**.
// * Helps avoid **callback hell** by providing `.then()`, `.catch()`, and `.finally()`.
// * Has three states:

//   * **Pending** → Initial state, neither fulfilled nor rejected.
//   * **Fulfilled** → Operation completed successfully.
//   * **Rejected** → Operation failed.

// ---

// ##  **Promise Lifecycle**

// ```text
// new Promise() → pending → (fulfilled | rejected)
// ```

// ---

// ##  **Basic Syntax**

// ```javascript
// const promise = new Promise((resolve, reject) => {
//   // async task
//   let success = true;
//   if (success) {
//     resolve("Operation Successful");
//   } else {
//     reject("Operation Failed");
//   }
// });

// promise
//   .then(result => console.log(result))   // On success
//   .catch(error => console.error(error))  // On failure
//   .finally(() => console.log("Always runs"));
// ```

// ---

// ##  **Why Promises?**

// Before Promises, we used **callbacks**, which led to **callback hell**:

// ```javascript
// // Callback Hell Example
// getUser(1, (user) => {
//   getPosts(user.id, (posts) => {
//     getComments(posts[0].id, (comments) => {
//       console.log(comments);
//     });
//   });
// });
// ```

// With **Promises**:

// ```javascript
// getUser(1)
//   .then(user => getPosts(user.id))
//   .then(posts => getComments(posts[0].id))
//   .then(comments => console.log(comments))
//   .catch(error => console.error(error));
// ```

// ---

// ##  **Creating a Promise**

// Example: Simulate API call

// ```javascript
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.3; // 70% success rate
//       if (success) {
//         resolve({ message: "Data fetched successfully" });
//       } else {
//         reject(new Error("Failed to fetch data"));
//       }
//     }, 1000);
//   });
// }

// fetchData()
//   .then(data => console.log(data.message))
//   .catch(err => console.error(err.message))
//   .finally(() => console.log("API call finished"));
// ```

// ---

// ##  **Promise Chaining**

// ```javascript
// new Promise((resolve) => {
//   setTimeout(() => resolve(1), 1000);
// })
// .then(result => {
//   console.log(result);
//   return result * 2;
// })
// .then(result => {
//   console.log(result);
//   return result * 2;
// })
// .then(result => console.log(result));
// ```

// ---

// ##  **`Promise.all`, `Promise.race`, `Promise.any`, `Promise.allSettled`**

// ### **1. Promise.all** → Waits for all promises to resolve or rejects if one fails

// ```javascript
// Promise.all([
//   fetch('/api/user'),
//   fetch('/api/posts'),
//   fetch('/api/comments')
// ])
// .then(responses => console.log("All fetched"))
// .catch(err => console.error("One request failed:", err));
// ```

// ### **2. Promise.race** → Returns first settled promise (fulfilled or rejected)

// ```javascript
// Promise.race([
//   fetch('/api/user'),
//   new Promise((_, reject) => setTimeout(() => reject("Timeout!"), 5000))
// ])
// .then(response => console.log("First completed:", response))
// .catch(error => console.error(error));
// ```

// ### **3. Promise.any** → Resolves when the first promise **fulfills** (ignores rejections)

// ```javascript
// Promise.any([
//   fetch('/api/backup1'),
//   fetch('/api/backup2'),
//   fetch('/api/backup3')
// ])
// .then(response => console.log("First successful response"))
// .catch(err => console.error("All failed:", err));
// ```

// ### **4. Promise.allSettled** → Returns results of all promises (fulfilled or rejected)

// ```javascript
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success')
// ])
// .then(results => console.log(results));
// ```

// ---

// ##  **Async/Await (Syntactic Sugar over Promises)**

// ```javascript
// async function getData() {
//   try {
//     const response = await fetch('/api/data');
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     console.log("Operation complete");
//   }
// }
// getData();
// ```

// ---

// ##  **Industry-Standard Best Practices**

// ✔ **Always return a Promise in async functions**
// ✔ **Handle rejections using `.catch()` or `try...catch`**
// ✔ **Use `Promise.all` for parallel API calls**
// ✔ **Use `Promise.race` for timeout handling**
// ✔ **Avoid unhandled Promise rejections**
// ✔ **Don’t block the event loop with heavy synchronous code inside Promises**
// ✔ **Chain Promises instead of nesting**
// ✔ **Prefer `async/await` for readability**
// ✔ **Use `Promise.allSettled` for fail-safe multiple requests**

// ---

// ##  **Common Mistakes**

//  Forgetting to return inside `.then()`
//  Mixing callbacks and Promises unnecessarily
//  Not using `.catch()` → leads to unhandled rejections

// ---

// ##  **Interview Questions**

// 1. **What are Promises? Why were they introduced?**
// 2. **Explain Promise states.**
// 3. **Difference between `Promise.all` and `Promise.allSettled`.**
// 4. **How does `Promise.race` work?**
// 5. **What happens if one Promise rejects in `Promise.all`?**
// 6. **Explain `async/await`. How does it work internally?**
// 7. **How do you handle multiple API calls with Promises?**
// 8. **What is the difference between `.then().catch()` and `try...catch` with async/await?**
// 9. **How to implement a custom Promise polyfill?**
// 10. **What is microtask queue and how do Promises fit in event loop?**

// ---

// ##  **Real-World Use Case Example (API calls)**

// ```javascript
// async function fetchUserData() {
//   try {
//     const [user, posts] = await Promise.all([
//       fetch('/api/user').then(res => res.json()),
//       fetch('/api/posts').then(res => res.json())
//     ]);

//     console.log("User:", user);
//     console.log("Posts:", posts);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// fetchUserData();
// ```

// ---

// *******************************************************
// Great question! The main reason we use these **Promise methods** is to handle **multiple asynchronous tasks together in different ways**—instead of waiting for them one by one.

// Let’s break it down with **real-life analogies and simplest examples**.

// ---

// ##  Why do we need them?

// Imagine:

// * You **order 3 pizzas** from different restaurants (3 promises).
// * You want to handle them differently based on the situation:

//   * Wait for **all pizzas** to arrive before eating → `Promise.all`
//   * Eat the **first pizza** that arrives → `Promise.race`
//   * Eat the **first good pizza**, ignore bad ones → `Promise.any`
//   * Know **which pizzas came and which failed** → `Promise.allSettled`

// ---

// ##  Simplest Examples

// ### 1. **Promise.all** → Wait for all to finish

// Use case: Load **profile, posts, and comments** together before showing UI.

// ```javascript
// const pizza1 = Promise.resolve("Pizza 1");
// const pizza2 = Promise.resolve("Pizza 2");

// Promise.all([pizza1, pizza2])
//   .then(results => console.log("All pizzas arrived:", results));
// ```

//  Output:

// ```
// All pizzas arrived: [ 'Pizza 1', 'Pizza 2' ]
// ```

// If one fails, you cancel dinner (it rejects).

// ---

// ### 2. **Promise.race** → Take the first one

// Use case: **API request with timeout**.

// ```javascript
// const fastPizza = new Promise(resolve => setTimeout(() => resolve("Fast Pizza"), 1000));
// const slowPizza = new Promise(resolve => setTimeout(() => resolve("Slow Pizza"), 3000));

// Promise.race([fastPizza, slowPizza])
//   .then(result => console.log("First pizza:", result));
// ```

//  Output:

// ```
// First pizza: Fast Pizza
// ```

// ---

// ### 3. **Promise.any** → First successful one

// Use case: Multiple backup servers, take **first that works**.

// ```javascript
// const badPizza = Promise.reject("Burnt Pizza");
// const goodPizza = Promise.resolve("Fresh Pizza");

// Promise.any([badPizza, goodPizza])
//   .then(result => console.log("Got a good pizza:", result));
// ```

//  Output:

// ```
// Got a good pizza: Fresh Pizza
// ```

// ---

// ### 4. **Promise.allSettled** → Check status of all

// Use case: Show which API succeeded or failed.

// ```javascript
// const pizza1 = Promise.resolve("Pizza 1");
// const pizza2 = Promise.reject("Pizza 2 failed");

// Promise.allSettled([pizza1, pizza2])
//   .then(results => console.log("Order results:", results));
// ```

//  Output:

// ```javascript
// [
//   { status: 'fulfilled', value: 'Pizza 1' },
//   { status: 'rejected', reason: 'Pizza 2 failed' }
// ]
// ```

// ---

// ##  Why are these necessary?

// Because:

// * Real apps often **fetch multiple resources at once** (profile, cart, notifications).
// * They **improve speed** (run in parallel instead of one by one).
// * They **handle errors gracefully** (choose first success, show partial results).

// *******************************************************
// **all important Promise methods** with practical examples so you clearly understand the difference between them.

// ---

// ##  **Main Promise Methods**

// 1. **`Promise.all()`**
// 2. **`Promise.race()`**
// 3. **`Promise.any()`**
// 4. **`Promise.allSettled()`**

// ---

// ### **Common Setup**

// We’ll simulate API calls with `setTimeout`:

// ```javascript
// function apiCall(name, time, shouldFail = false) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(`${name} failed`);
//       } else {
//         resolve(`${name} completed`);
//       }
//     }, time);
//   });
// }

// const p1 = apiCall("API 1", 1000);       // resolves in 1s
// const p2 = apiCall("API 2", 2000);       // resolves in 2s
// const p3 = apiCall("API 3", 1500, true); // rejects in 1.5s
// ```

// ---

// ##  1. **`Promise.all()`**

// * **Runs all promises in parallel**.
// * **Resolves when ALL promises succeed**.
// * **Rejects immediately if ANY promise fails**.

// ```javascript
// Promise.all([p1, p2])
//   .then(results => console.log(" Promise.all:", results))
//   .catch(error => console.error(" Promise.all error:", error));
// ```

//  **Output if all succeed**:

// ```
//  Promise.all: [ 'API 1 completed', 'API 2 completed' ]
// ```

//  **Output if one fails**:

// ```
//  Promise.all error: API 3 failed
// ```

// ---

// ##  2. **`Promise.race()`**

// * **Returns the first settled promise** (fulfilled or rejected).

// ```javascript
// Promise.race([p1, p2, p3])
//   .then(result => console.log(" Promise.race:", result))
//   .catch(error => console.error(" Promise.race error:", error));
// ```

//  If **p1** (1s) resolves first:

// ```
//  Promise.race: API 1 completed
// ```

// If **p3** fails before others:

// ```
//  Promise.race error: API 3 failed
// ```

// ---

// ##  3. **`Promise.any()`**

// * **Returns the first fulfilled promise** (ignores rejections).
// * **Fails only if ALL promises reject**.

// ```javascript
// Promise.any([p1, p3])
//   .then(result => console.log(" Promise.any:", result))
//   .catch(error => console.error(" Promise.any error:", error));
// ```

//  Output:

// ```
//  Promise.any: API 1 completed
// ```

// If all fail:

// ```
//  Promise.any error: [AggregateError: All promises were rejected]
// ```

// ---

// ##  4. **`Promise.allSettled()`**

// * **Waits for ALL promises to settle** (either resolve or reject).
// * Returns an array of objects with `status` and `value`/`reason`.

// ```javascript
// Promise.allSettled([p1, p2, p3])
//   .then(results => console.log(" Promise.allSettled:", results));
// ```

//  Output:

// ```javascript
// [
//   { status: 'fulfilled', value: 'API 1 completed' },
//   { status: 'fulfilled', value: 'API 2 completed' },
//   { status: 'rejected', reason: 'API 3 failed' }
// ]
// ```

// ---

// ##  **Visual Summary Table**

// | Method                 | Resolves When                               | Rejects When        |
// | ---------------------- | ------------------------------------------- | ------------------- |
// | **Promise.all**        | All promises fulfilled                      | Any promise rejects |
// | **Promise.race**       | First promise settles (resolve or reject)   | Same as above       |
// | **Promise.any**        | First fulfilled promise                     | All promises reject |
// | **Promise.allSettled** | All promises settle (fulfilled or rejected) | **Never rejects**   |

// ---

// ##  **Industry Use Cases**

// * **`Promise.all`** → Load user profile + posts + comments together.
// * **`Promise.race`** → API call with timeout fallback.
// * **`Promise.any`** → Multiple backup servers, take the first successful response.
// * **`Promise.allSettled`** → Show partial results even if some fail.

// ---

// ###  **Example: Timeout with `Promise.race`**

// ```javascript
// function timeout(ms) {
//   return new Promise((_, reject) => setTimeout(() => reject("Timeout!"), ms));
// }

// Promise.race([apiCall("Data", 2000), timeout(1000)])
//   .then(result => console.log(result))
//   .catch(error => console.error(error));
// ```

// **Output**:

// ```
// Timeout!
// ```
