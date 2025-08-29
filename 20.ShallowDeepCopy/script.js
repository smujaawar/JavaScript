// **Shallow copy** and **Deep copy** are critical concepts when working with objects and arrays in JavaScript because of how **references** work in memory. Let’s break it down **step by step with examples, diagrams, and best practices**.

// ---

// ##  **Why Do We Need Copying?**

// In JavaScript:

// * **Primitive values** (string, number, boolean, etc.) are copied **by value**.
// * **Objects & arrays** are copied **by reference**, meaning:

//   * If you assign an object to another l, **both point to the same memory location**.

// Example:

// ```javascript
// let obj1 = { name: "Alice" };
// let obj2 = obj1;
// obj2.name = "Bob";
// console.log(obj1.name); // Bob (because both refer to same object)
// ```

// So, copying matters when you **don’t want changes in one object to affect the other**.

// ---

// ##  **What is Shallow Copy?**

// A **shallow copy** creates a **new object**, but only copies **one level deep**.

// * Nested objects/arrays are **still references** (not cloned).

// ---

// ###  **Ways to Create Shallow Copy**

// #### 1. **Object Spread (`...`)**

// ```javascript
// let obj1 = { name: "Alice", address: { city: "NY" } };
// let obj2 = { ...obj1 };

// obj2.name = "Bob"; // OK, changes only obj2
// obj2.address.city = "LA"; //  Also changes obj1, because address is still a reference

// console.log(obj1.address.city); // LA
// ```

// #### 2. **`Object.assign()`**

// ```javascript
// let obj1 = { name: "Alice", address: { city: "NY" } };
//            Object.assign(target, ...sources)

// let obj2 = Object.assign({}, obj1);

// obj2.address.city = "LA"; //  Still changes obj1
// ```

// #### 3. **Array Shallow Copy**

// * Using `slice()`, `concat()`, or spread (`[...arr]`)

// ```javascript
// let arr1 = [1, 2, [3, 4]];
// let arr2 = [...arr1];
// arr2[2][0] = 99; //  Changes arr1 too
// ```

// ---

// ###  **When to Use Shallow Copy**

// * When your object **does not have nested objects**.
// * For **flat structures** (like `{ id: 1, name: "test" }`).

// ---

// ##  **What is Deep Copy?**

// A **deep copy** creates a **completely independent clone**, including **all nested objects and arrays**.

// * Changes in the copied object do **not affect** the original.

// ---

// ###  **Ways to Create Deep Copy**

// #### 1. **Using `structuredClone()` (Modern JS) **

// ```javascript
// let obj1 = { name: "Alice", address: { city: "NY" } };
// let obj2 = structuredClone(obj1);

// obj2.address.city = "LA"; //  Only obj2 changes
// console.log(obj1.address.city); // NY
// ```

// ✔ Handles **dates, arrays, nested objects**, and more.
//  Not available in **older browsers**.

// ---

// #### 2. **Using `JSON.parse(JSON.stringify())`**

// ```javascript
// let obj1 = { name: "Alice", address: { city: "NY" } };
// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.address.city = "LA"; //  No effect on obj1
// ```

// ✔ Works in older browsers
//  **Does NOT handle**: functions, `undefined`, `Symbol`, circular references.

// ---

// #### 3. **Using Libraries (Lodash `_.cloneDeep`)**

// ```javascript
// import _ from "lodash";
// let obj2 = _.cloneDeep(obj1);
// ```

// ✔ Handles **complex structures**
//  Requires external library.

// ---

// #### 4. **Manual Recursion**

// For full control, you can write a recursive function to deep clone objects.

// ---

// ##  **Key Differences**

// | Feature        | Shallow Copy              | Deep Copy                       |
// | -------------- | ------------------------- | ------------------------------- |
// | **Depth**      | Copies only first level   | Copies all nested levels        |
// | **References** | Nested objects are shared | No shared references            |
// | **Methods**    | Spread, `Object.assign`   | `structuredClone`, JSON, Lodash |

// ---

// ###  **Visual Example**

// Original:

// ```javascript
// let obj1 = { a: 1, b: { c: 2 } };
// ```

// * **Shallow Copy:** `obj2.b` → **same reference as obj1.b**
// * **Deep Copy:** `obj2.b` → **different reference**

// ---

// ##  **When to Use Deep Copy**

// * When dealing with **nested objects/arrays**.
// * When you need **complete immutability** (e.g., in React state management).

// ---

// ##  **Quick Test**

// ```javascript
// let obj1 = { name: "Alice", address: { city: "NY" } };

// // Shallow
// let shallow = { ...obj1 };
// shallow.address.city = "LA";
// console.log(obj1.address.city); // LA

// // Deep
// let deep = structuredClone(obj1);
// deep.address.city = "Chicago";
// console.log(obj1.address.city); // NY
// ```

// ---
