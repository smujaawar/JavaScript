// ##  **What is Hoisting?**

// **Hoisting** is JavaScript’s behavior of **moving variable and function declarations to the top of their scope (global or function) during the compilation phase**, **before code execution**.

// ### In other words:

// * JavaScript **allocates memory for declarations** (variables and functions) **before executing the code**.
// * Only **declarations** are hoisted, **not initializations**.

// ---

// ##  **When does it happen?**

// * During the **Creation Phase** of the **Execution Context** (before code runs).
// * JS engine scans your code and:

//   * Creates **function objects** for function declarations.
//   * Sets variables (`var`) to **undefined** initially.

// ---

// ##  **Hoisting is related to:**

// * **Execution Context**

//   * **Creation Phase:** Memory allocation (hoisting happens here).
//   * **Execution Phase:** Code runs line by line.

// ---

// ##  **Types of Hoisting**

// ### **1. Function Hoisting**

// * Entire **function declarations** are hoisted with their body.
// * You can call a function **before it is declared**.

// Example:

// ```js
// greet(); //  Works

// function greet() {
//   console.log("Hello!");
// }
// ```

// **Why?**

// * The engine stores the full function object during the **creation phase**.

// ---

// ### **2. Variable Hoisting**

// * Variables declared with **var** are hoisted but initialized to **undefined**.
// * Accessing them **before initialization** gives `undefined` (not an error).

// Example:

// ```js
// console.log(x); //  undefined
// var x = 10;
// ```

// #### Key Points:

// * `var` → hoisted, initialized as `undefined`.
// * `let` and `const` → hoisted too, **but not initialized**. They remain in the **Temporal Dead Zone (TDZ)** until declared.

// Example:

// ```js
// console.log(a); //  ReferenceError (TDZ)
// let a = 5;
// ```

// ---

// ### **3. Class Hoisting**

// * Classes are also hoisted, but like `let`/`const`, they stay in the **TDZ**.

// ```js
// const obj = new Person(); //  ReferenceError
// class Person {}
// ```

// ---

// ##  **Hoisting in Different Scenarios**

// ### **Case 1: Function Declaration vs Function Expression**

// ```js
// foo(); //  Works
// bar(); //  TypeError: bar is not a function

// function foo() {
//   console.log("I am foo");
// }

// var bar = function() {
//   console.log("I am bar");
// };
// ```

// **Why?**

// * `foo` (function declaration) → hoisted completely.
// * `bar` (function expression) → variable `bar` is hoisted as `undefined`, the function value is assigned later.

// ---

// ### **Case 2: Arrow Functions**

// ```js
// baz(); //  TypeError
// var baz = () => console.log("I am baz");
// ```

// * Same as function expression: variable is hoisted as `undefined`.

// ---

// ### **Case 3: let/const and Temporal Dead Zone**

// ```js
// console.log(x); //  ReferenceError
// let x = 10;
// ```

// * TDZ exists from the start of the block until the declaration.

// ---

// ### **Case 4: Mixed**

// ```js
// console.log(a); // undefined
// var a = 1;

// console.log(b); // ReferenceError
// let b = 2;

// console.log(c); // ReferenceError
// const c = 3;
// ```

// ---

// ##  **Under the Hood**

// When JavaScript executes a file:

// ### **1. Creation Phase (Hoisting happens here)**

// * For **var** → allocate memory, set value `undefined`.
// * For **function declarations** → store full function.
// * For **let, const, class** → allocate memory but **don’t initialize** (TDZ).

// ### **2. Execution Phase**

// * Code runs line by line.
// * Assignments happen now.

// ---

// ##  **Important Interview Points**

// * Hoisting is **not actually moving code**; it’s a mental model for the memory allocation phase.
// * `var` → hoisted with `undefined`.
// * `function declarations` → hoisted completely.
// * `let`, `const`, `class` → hoisted but not initialized (TDZ).
// * Function expressions and arrow functions **do not hoist like declarations**.

// ---

// ##  **Common Interview Tricky Questions**

// ### **Q1**

// ```js
// console.log(a);
// var a = 10;
// ```

//  Output: `undefined`

// ---

// ### **Q2**

// ```js
// console.log(a);
// let a = 10;
// ```

//  Output: `ReferenceError`

// ---

// ### **Q3**

// ```js
// foo();
// function foo() {
//   console.log("Hello");
// }
// ```

//  Output: `"Hello"`

// ---

// ### **Q4**

// ```js
// bar();
// var bar = function() {
//   console.log("Hi");
// };
// ```

//  Output: `TypeError: bar is not a function`

// ---

// ### **Q5**

// ```js
// console.log(typeof a); // ?
// var a = 10;
// ```

//  Output: `"undefined"`

// ---

// ### **Q6**

// ```js
// console.log(typeof b); // ?
// let b = 20;
// ```

//  Output: `ReferenceError`
// (`typeof` doesn’t save you from TDZ with let/const)

// ---

// ---

// ##  **Mini Coding Exercises for Students**

// ### 1. Predict the output:

// ```js
// console.log(x);
// var x = 5;
// console.log(x);
// ```

// ### 2. Predict the output:

// ```js
// console.log(a);
// console.log(b);
// var a = 1;
// let b = 2;
// ```

// ### 3. Predict the output:

// ```js
// foo();
// bar();
// function foo() { console.log("foo"); }
// var bar = function() { console.log("bar"); }
// ```

// ---

// ##  **Real-World Relevance**

// * Understanding hoisting helps **avoid bugs** in large apps.
// * Critical when working with **modules**, **async code**, and **closures**.
// * Prevents pitfalls like accessing variables before declaration.

// **************************Temporal Dead Zone**************************

// **TDZ (Temporal Dead Zone)** in JavaScript is an important concept tied to **`let`**, **`const`**, and **class declarations**.

// ---

// ##  **Definition**

// The **Temporal Dead Zone** is the **time between entering a scope and the point where a variable declared with `let` or `const` is initialized**.

// In this zone:

// * The variable **exists in memory** (it has been hoisted) but **cannot be accessed**.
// * Trying to access it results in a **ReferenceError**.

// ---

// ###  **Why does TDZ exist?**

// * To prevent accessing variables **before their actual declaration line**.
// * Ensures **predictable behavior** (unlike `var`, which gives `undefined`).

// ---

// ##  **Example**

// ```js
// {
//   // TDZ starts here
//   console.log(a); //  ReferenceError
//   let a = 10;     // TDZ ends here
//   console.log(a); //  10
// }
// ```

// ---

// ###  **Same with const**

// ```js
// {
//   console.log(b); //  ReferenceError
//   const b = 20;
// }
// ```

// ---

// ###  **Even `typeof` fails**

// With `var`:

// ```js
// console.log(typeof x); //  "undefined"
// var x = 5;
// ```

// With `let`:

// ```js
// console.log(typeof y); //  ReferenceError
// let y = 5;
// ```

// ---

// ##  **How TDZ Works Internally**

// * When the JS engine **creates the execution context**, it **allocates memory for variables declared with let/const**.
// * But it **does not initialize them with a default value (like undefined)**.
// * They stay **uninitialized** until the actual declaration line is executed.
// * This period is called the **Temporal Dead Zone**.

// ---

// ##  **Scope Entry → Declaration → Initialization**

// Example:

// ```js
// {
//   // Scope starts
//   // TDZ for `c` begins
//   console.log(c); //  ReferenceError
//   let c = 30;     // TDZ ends
//   console.log(c); //  30
// }
// ```

// ---

// ###  **TDZ and Functions**

// ```js
// {
//   console.log(fun); //  ReferenceError
//   let fun = function() {};
// }
// ```

// * Same concept applies because `fun` is declared with `let`.

// ---

// ##  **Why important in Interviews?**

// Because **hoisting + TDZ** together confuse many developers:

// * `let` and `const` **are hoisted** (memory allocated).
// * But **they are not initialized** (hence ReferenceError).

// ---
