// A **deep-dive into the JavaScript Engine**—with clear structure, definitions, inner workings, examples, and interview insights:

// ---

// ##  **What is a JavaScript Engine?**

// A **JavaScript engine** is a program or interpreter that **executes JavaScript code**. It takes your **human-readable JavaScript code** and converts it into **machine code** (binary) that your CPU can understand.

// ### **Examples of Popular JS Engines**

// * **V8** – Google Chrome, Node.js
// * **SpiderMonkey** – Firefox
// * **JavaScriptCore (Nitro)** – Safari
// * **Chakra** – Old Microsoft Edge
// * **Hermes** – React Native

// ---

// ##  **How Does a JS Engine Work?**

// The engine follows a **pipeline** to process and execute your code:

// ### **1. Parsing**

// * The engine **reads your code** and breaks it down into **tokens**.
// * These tokens are analyzed for syntax and converted into an **Abstract Syntax Tree (AST)**.
// * Example:

// ```javascript
// let x = 5;
// ```

// AST represents:

// * `VariableDeclaration → Identifier(x) → Literal(5)`

// ---

// ### **2. Compilation (JIT – Just-In-Time Compilation)**

// * Modern engines like V8 use **JIT compilation**.
// * Converts JS → **bytecode** or **machine code** at runtime for speed.
// * **Why JIT?**

//   * JavaScript is dynamic (types can change at runtime).
//   * JIT optimizes frequently used code (hot paths).

// ---

// ### **3. Execution**

// * The engine runs the machine code in the CPU.
// * Handles **memory allocation, garbage collection**, and **scope management** during this phase.

// ---

// ### **4. Garbage Collection**

// * JS is **memory-managed**.
// * The engine automatically removes unused objects from memory using algorithms like **Mark-and-Sweep**.

// ---

// ##  **Key Components of a JS Engine**

// Let’s take **V8** as an example:

// ### **1. Call Stack**

// * Executes functions using the **LIFO (Last In First Out)** principle.
// * Each function call adds a new **stack frame**.

// ### **2. Heap**

// * Memory space for objects and functions.
// * Unstructured compared to the stack.

// ### **3. Interpreter**

// * Reads the JS code line by line and converts it to bytecode.
// * V8’s interpreter is called **Ignition**.

// ### **4. Compiler**

// * Optimizes and converts hot code into **highly optimized machine code**.
// * V8’s compiler is **TurboFan**.

// ---

// ##  **How JIT Compilation Works in V8**

// * **Initial run:** Ignition (interpreter) creates bytecode.
// * **Hot code detection:** If a function is used many times, TurboFan optimizes it into machine code.
// * **Deoptimization:** If assumptions about types break, code gets de-optimized.

// ---

// ##  **Terms You MUST Know**

// * **Interpreter:** Converts JS to bytecode and executes it line by line.
// * **Compiler:** Converts code to optimized machine code.
// * **JIT Compilation:** Combines interpretation and compilation for better speed.
// * **AST (Abstract Syntax Tree):** Tree structure representing code syntax.
// * **Garbage Collection:** Automatic memory cleanup (Mark-and-Sweep).
// * **Call Stack & Heap:** Execution and memory storage areas.

// ---

// ##  **Why is JavaScript Single-Threaded but Still Fast?**

// * JS has **one main thread** for executing code.
// * It uses **event loop** and **asynchronous callbacks** to handle multiple tasks efficiently.
// * Heavy tasks (I/O, network requests) go to **Web APIs** and **callback queue**, not blocking the main thread.

// ---

// ##  **Common Interview Questions on JS Engine**

// 1. What is a JavaScript engine? Name some engines.
// 2. Explain the difference between **Interpreter** and **Compiler**.
// 3. How does the V8 engine work internally?
// 4. What is JIT compilation? Why is it used in JS engines?
// 5. Explain **Call Stack vs Heap**.
// 6. What is **Garbage Collection** and how does it work in JS?
// 7. Why is JavaScript **single-threaded**?
// 8. What are **hot functions** in JIT compilation?
// 9. How does V8 optimize code execution?
// 10. What is **AST** in JavaScript?

// ---

// ##  **Code Example Showing Engine Behavior**

// ```javascript
// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));   // 5
// console.log(add("2", 3)); // "23"
// ```

// * First call: Both numbers → Engine optimizes `add`.
// * Second call: String + number → Engine de-optimizes (different type assumption).

// ---

// ***************Articles for Further Reading***************

// https://www.freecodecamp.org/news/javascript-engine-and-runtime-explained/
