// ES6 (ECMAScript 2015) and beyond (ES7, ES8, … ES2024) introduced **major improvements** to JavaScript. These features make the language more **powerful, readable, and maintainable**, and they are heavily used in **modern web development** (React, Node.js, etc.).

// Let's break this down into **important ES6+ features** with:

//  **Detailed Explanation**
//  **Examples**
//  **Where It’s Used in Real Projects**

// ---

// ##  **1. `let` and `const` (Block Scope & Immutability)**

// Before ES6, we only had `var` (function-scoped). ES6 introduced `let` and `const` for **block scoping**.

// ### **Key Points**

// * `let` → **block-scoped**, reassignable.
// * `const` → **block-scoped**, **cannot be reassigned** (but objects/arrays can mutate).
// * No hoisting like `var` (actually hoisted but in **TDZ**).

// ### **Example**

// ```js
// {
//   let x = 10;
//   const y = 20;
//   console.log(x); // 10
//   console.log(y); // 20
// }
// // console.log(x); // ReferenceError
// ```

//  **Real Use:** Always use `const` for values that don’t change, `let` otherwise. Avoid `var`.

// ---

// ##  **2. Arrow Functions (`=>`)**

// Shorter syntax for functions with **lexical `this`** binding.

// ### **Key Points**

// * No `function` keyword.
// * Does **NOT** have its own `this` (takes from parent scope).
// * Cannot be used as a constructor.

// ### **Example**

// ```js
// const add = (a, b) => a + b;
// console.log(add(5, 3)); // 8
// ```

// **Lexical this Example:**

// ```js
// function Person() {
//   this.age = 0;
//   setInterval(() => {
//     this.age++;
//     console.log(this.age);
//   }, 1000);
// }
// new Person();
// ```

//  Without arrow functions, `this` would refer to `window` or `undefined`.

//  **Real Use:** Used in callbacks, promises, array methods (`map`, `filter`, `reduce`).

// ---

// ##  **3. Template Literals (`` ` ``, String Interpolation)**

// Multi-line strings + expression interpolation.

// ### **Example**

// ```js
// const name = "John";
// const age = 25;
// console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// ```

//  **Real Use:** Avoids string concatenation.

// ---

// ##  **4. Default Parameters**

// Provide default values for function arguments.

// ### **Example**

// ```js
// function greet(name = "Guest") {
//   console.log(`Hello ${name}`);
// }
// greet(); // Hello Guest
// ```

//  **Real Use:** Avoids extra checks for `undefined` arguments.

// ---

// ##  **5. Destructuring (Objects & Arrays)**

// Unpack values from arrays or objects into variables.

// ### **Array Destructuring**

// ```js
// const [a, b] = [1, 2];
// console.log(a, b); // 1, 2
// ```

// ### **Object Destructuring**

// ```js
// const user = { name: "Alice", age: 30 };
// const { name, age } = user;
// console.log(name, age);
// ```

//  **Real Use:** React props, API responses.

// ---

// ##  **6. Spread & Rest Operator (`...`)**

// * **Spread** → Expands elements.
// * **Rest** → Collects remaining arguments.

// ### **Spread Example**

// ```js
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// console.log(arr2); // [1, 2, 3, 4]
// ```

// ### **Rest Example**

// ```js
// function sum(...nums) {
//   return nums.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3)); // 6
// ```

//  **Real Use:** Merging arrays, cloning objects, handling unknown arguments.

// ---

// ##  **7. Enhanced Object Literals**

// Allows shorthand syntax for properties and methods.

// ### **Example**

// ```js
// const name = "Alice";
// const user = {
//   name,
//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// };
// user.greet(); // Hello Alice
// ```

//  **Real Use:** Cleaner code for object creation.

// ---

// ##  **8. Modules (`import` & `export`)**

// ES6 introduced native **modules**.

// ### **Example**

// **math.js**

// ```js
// export const add = (a, b) => a + b;
// ```

// **main.js**

// ```js
// import { add } from './math.js';
// console.log(add(2, 3)); // 5
// ```

//  **Real Use:** Modular coding in React, Node.js.

// ---

// ##  **9. Promises (Async Handling)**

// Better way to handle async code than callbacks.

// ### **Example**

// ```js
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Data fetched"), 1000);
//   });
// };
// fetchData().then(data => console.log(data));
// ```

//  **Real Use:** API calls, async workflows.

// ---

// ##  **10. `class` & `extends` (OOP in JS)**

// Syntactic sugar for prototypes.

// ### **Example**

// ```js
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// const dog = new Dog("Buddy");
// dog.speak(); // Buddy barks
// ```

//  **Real Use:** React components, OOP patterns.

// ---

// ##  **11. `Map`, `Set`, `WeakMap`, `WeakSet`**

// ### **Example**

// ```js
// const set = new Set([1, 2, 2, 3]);
// console.log(set); // {1, 2, 3}
// ```

//  **Real Use:** Avoid duplicates, store unique values.

// ---

// ##  **12. Optional Chaining & Nullish Coalescing (ES11)**

// ### **Example**

// ```js
// const user = { profile: { name: "John" } };
// console.log(user?.profile?.name); // John
// console.log(user?.address?.city); // undefined
// ```

// **Nullish Coalescing:**

// ```js
// let val = null ?? "default";
// console.log(val); // default
// ```

//  **Real Use:** Avoid runtime errors for undefined values.

// ---

// ##  **13. `async/await` (ES8)**

// Syntactic sugar over Promises.

// ### **Example**

// ```js
// async function getData() {
//   const data = await fetchData();
//   console.log(data);
// }
// getData();
// ```

//  **Real Use:** API requests in modern apps.

// ---

// ##  **14. Other Useful ES Features**

// * **ES7**: `includes()` for arrays & `**` exponentiation operator.
// * **ES8**: `Object.entries()`, `Object.values()`.
// * **ES9**: Rest/spread in objects.
// * **ES10**: `flat()`, `flatMap()`.
// * **ES12**: `Promise.any()`.
// * **ES13+**: Top-level `await`, private class fields.

// ---

// 🔥 These are the **most important ES6+ features used in interviews and projects**.

// ---

// 👉 Do you want me to now prepare:
//  A **comparison table** of **old way vs ES6+ way** (to show improvement)?
//  A **set of 20 tricky interview questions** based on ES6 features with solutions?
//  A **real-world coding assignment using ES6 features (like building a mini app)**?

// Which one do you want first?
