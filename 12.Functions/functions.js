// JavaScript supports multiple ways of defining and using functions, each with unique behaviors, syntax, and use cases. Functions are **first-class citizens** in JavaScript, meaning they can be stored in variables, passed as arguments, and returned from other functions.

// Let’s cover **everything about all types of functions in JavaScript**, focusing on the most important and widely used types:

// ---

// ##  **1. Function Declaration (a.k.a Named Function)**

// ### **Syntax:**

// ```js
// function greet() {
//   console.log("Hello!");
// }
// greet();
// ```

// ### **Key Features:**

// * **Hoisted** (you can call the function before its declaration).
// * Has a **name** that can be used for recursion or debugging.
// * Good for reusable utilities.

// ### **Example:**

// ```js
// sayHello(); //  Works (Hoisting)

// function sayHello() {
//   console.log("Hello, World!");
// }
// ```

// ---

// ##  **2. Function Expression**

// ### **Syntax:**

// ```js
// const greet = function() {
//   console.log("Hi!");
// };
// greet();
// ```

// ### **Key Features:**

// * **Not hoisted** (unlike declarations).
// * Can be **anonymous** (no name) or **named** for debugging.
// * Used when you want to assign a function to a variable.

// ### **Example:**

// ```js
// // console.log(add(2,3));  Error

// const add = function(a, b) {
//   return a + b;
// };

// console.log(add(2,3)); // 5
// ```

// ---

// ##  **3. Arrow Function (ES6+)**

// ### **Syntax:**

// ```js
// const greet = () => console.log("Hello!");
// greet();
// ```

// ### **Key Features:**

// * **Short syntax** for writing functions.
// * **Does NOT have its own `this`** → Inherits `this` from its surrounding scope (lexical scoping).
// * **Cannot be used as constructors** (no `new`).
// * **Does NOT have `arguments` object**.
// * Great for **callbacks** and **functional programming**.

// ### **Examples:**

// ```js
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

// const square = x => x * x;
// console.log(square(4)); // 16
// ```

// ---

// ##  **4. Anonymous Function**

// ### **Definition:**

// A function without a name, usually used as an **argument to another function**.

// ### **Example:**

// ```js
// setTimeout(function() {
//   console.log("Executed after 2s");
// }, 2000);
// ```

// ---

// ##  **5. Immediately Invoked Function Expression (IIFE)**

// ### **Definition:**

// A function that runs **immediately after its definition**.

// ### **Syntax:**

// ```js
// (function() {
//   console.log("IIFE runs immediately!");
// })();
// ```

// ### **Use Cases:**

// * Avoid **global scope pollution**.
// * Create **private variables**.

// ---

// ##  **6. Higher-Order Function (HOF)**

// ### **Definition:**

// A function that **takes another function as an argument** or **returns a function**.

// ### **Example:**

// ```js
// function hof(callback) {
//   callback();
// }

// hof(() => console.log("Hello from HOF!"));
// ```

// Real-world example:

// ```js
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]
// ```

// ---

// ##  **7. Callback Function**

// ### **Definition:**

// A function **passed as an argument** to another function and executed later.

// ### **Example:**

// ```js
// function greet(name, callback) {
//   console.log(`Hello, ${name}`);
//   callback();
// }

// greet("Alice", () => console.log("Callback executed!"));
// ```

// ---

// ##  **8. Constructor Function**

// ### **Definition:**

// A function used to **create objects** (works with `new` keyword).

// ### **Syntax:**

// ```js
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person("John", 25);
// console.log(p1.name); // John
// ```

// ---

// ##  **9. Generator Function**

// ### **Definition:**

// A special function that can **pause execution** and **resume later** using `yield`.

// ### **Syntax:**

// ```js
// function* generatorExample() {
//   yield 1;
//   yield 2;
// }

// const gen = generatorExample();
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// ```

// ---

// ##  **10. Async Function (ES8+)**

// ### **Definition:**

// A function declared with `async` keyword, which returns a **Promise** and uses `await` for handling asynchronous code.

// ### **Example:**

// ```js
// async function fetchData() {
//   return "Data fetched!";
// }

// fetchData().then(console.log); // Data fetched!
// ```

// ---

// ##  **11. Recursive Function**

// ### **Definition:**

// A function that **calls itself**.

// ### **Example:**

// ```js
// function factorial(n) {
//   return n === 1 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120
// ```

// ---

// ##  **12. Function with Default Parameters**

// ### **Example:**

// ```js
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }
// greet(); // Hello, Guest
// ```

// ---

// ##  **Most Commonly Used in Industry**

// ✔ Arrow Functions
// ✔ Higher-Order Functions (`map`, `filter`, `reduce`)
// ✔ Async Functions (`async/await`)
// ✔ Function Declarations & Expressions
// ✔ Callback Functions (in events, APIs)
// ✔ IIFEs (for modular patterns)
