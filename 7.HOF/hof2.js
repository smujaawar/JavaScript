// Let’s **master Higher-Order Functions (HOFs) in JavaScript** step by step, from **beginner concepts to advanced patterns** with **real-world use cases**.

// ---

// #  **1. What is a Higher-Order Function?**

// A **Higher-Order Function (HOF)** is a function that:

// * **Takes another function as an argument**, OR
// * **Returns a function as a result**, OR
// * **Does both**.

// This is possible because **functions in JS are first-class citizens** (they can be assigned, passed, and returned).

// ---

// ### **Basic Example**

// ```js
// function greet(name) {
//   return `Hello, ${name}`;
// }

// function higherOrder(fn, value) {
//   return fn(value);
// }

// console.log(higherOrder(greet, "Alice")); // Output: Hello, Alice
// ```

// Here:

// * `higherOrder` takes `greet` as an argument → **HOF**.

// ---

// #  **2. Why Do We Use HOFs?**

// * **Code reusability** → pass behavior dynamically.
// * **Cleaner, declarative code** → avoid loops and boilerplate.
// * **Functional programming style** → composability.

// ---

// #  **3. Common Built-in HOFs in JavaScript**

// These are **most-used in real projects and interviews**:

// ### **(A) `forEach()`**

// Iterates over an array, **does not return a new array**.

// ```js
// const arr = [1, 2, 3];
// arr.forEach(num => console.log(num * 2)); // 2, 4, 6
// ```

// ---

// ### **(B) `map()`**

// Creates a **new array** by applying a function to each element.

// ```js
// const prices = [100, 200, 300];
// const discounted = prices.map(price => price * 0.9);
// console.log(discounted); // [90, 180, 270]
// ```

// ---

// ### **(C) `filter()`**

// Returns a new array **only with elements that satisfy a condition**.

// ```js
// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.filter(num => num % 2 === 0);
// console.log(even); // [2, 4]
// ```

// ---

// ### **(D) `reduce()`**

// Reduces an array to **a single value**.

// ```js
// const numbers = [10, 20, 30];
// const total = numbers.reduce((acc, num) => acc + num, 0);
// console.log(total); // 60
// ```

// ---

// ### **(E) `sort()`**

// Sorts an array using a **callback** for comparison.

// ```js
// const nums = [4, 2, 10, 1];
// nums.sort((a, b) => a - b); // Ascending
// console.log(nums); // [1, 2, 4, 10]
// ```

// ---

// #  **4. Returning Functions (HOF Pattern)**

// A HOF can **return another function** for dynamic behavior.

// ### **Example: Function that returns a multiplier**

// ```js
// function multiplier(factor) {
//   return function(num) {
//     return num * factor;
//   }
// }

// const double = multiplier(2);
// console.log(double(5)); // 10
// ```

// This is **closure + HOF**, often used in **currying**.

// ---

// #  **5. Real-World Use Cases of HOFs**

// ### **(A) Event Handling**

// ```js
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Button clicked!");
// });
// ```

// ### **(B) API Data Transformation**

// ```js
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(users => {
//     const names = users.map(user => user.name);
//     console.log(names);
//   });
// ```

// ### **(C) Debouncing & Throttling**

// HOF used to **control function execution frequency** in performance optimization.

// ---

// #  **6. Advanced HOF Examples**

// ### **(A) Custom HOF: Execute N times**

// ```js
// function repeat(fn, times) {
//   for (let i = 0; i < times; i++) {
//     fn();
//   }
// }

// repeat(() => console.log("Hello"), 3);
// // Hello (3 times)
// ```

// ---

// ### **(B) Function Composition (Combine multiple functions)**

// ```js
// const add = x => x + 2;
// const multiply = x => x * 3;

// function compose(f, g) {
//   return function(x) {
//     return f(g(x));
//   }
// }

// const addThenMultiply = compose(multiply, add);
// console.log(addThenMultiply(5)); // (5+2)*3 = 21
// ```

// ---

// ### **(C) Middleware Pattern (Express.js style)**

// HOFs power middleware in frameworks like **Express**:

// ```js
// function middleware(req, res, next) {
//   console.log("Middleware executed");
//   next();
// }
// ```

// ---

// #  **7. Key Benefits of HOFs**

// ✔ Less code, more readability.
// ✔ Dynamic behavior injection.
// ✔ Essential in **functional programming**, **React hooks**, **Node.js middleware**, etc.

// ---

// #  **8. Common Pitfalls**

//  Forgetting to call the callback.
//  Using HOFs incorrectly (e.g., using `map()` when you need `forEach()`).

// ---

// #  **9. Interview Tricky Questions**

// 1. Explain difference between `map()`, `forEach()`, and `reduce()`.
// 2. Write a custom `map()` function.
// 3. How does `filter()` differ from `find()`?
// 4. Implement a **custom `compose()` function**.
// 5. Explain HOF usage in React hooks like `useEffect()`.

// ---

// #  **10. Famous Example: Chaining**

// ```js
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .filter(num => num % 2 !== 0)    // Odd numbers
//   .map(num => num * 2)             // Double them
//   .reduce((a, b) => a + b, 0);     // Sum

// console.log(result); // 18
// ```

// ---
