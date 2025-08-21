// **variables, data types, operators, arrays, strings, and object methods**,
//  three sections:

// 1. **Conceptual & Application-Based Questions** (for practice)
// 2. **Tricky Interview Questions** (to test depth)
// 3. **Real-Time Use Cases & Mini Challenges** (to apply concepts)

// ---

// ##  **1. Conceptual & Application-Based Questions**

// (These improve understanding and application)

// ### **Variables & Data Types**

// 1. What will this log?

// ```js
// let x = "5";
// let y = 2;
// console.log(x + y);
// console.log(x - y);
// ```

// (Explain why results differ.)

// 2. Predict the output and explain:

// ```js
// var a;
// console.log(typeof a);
// console.log(typeof null);
// ```

// 3. Why is `const` different from `let` when working with objects and arrays?

// ---

// ### **Operators**

// 4. What is the difference between:

// ```js
// console.log(0 == false);
// console.log(0 === false);
// ```

// Why does one return `true` and the other `false`?

// 5. Explain:

// ```js
// console.log("10" - 2);
// console.log("10" + 2);
// ```

// ---

// ### **Arrays**

// 6. How to remove duplicates from an array **without using `Set`**?
// 7. How do `map()`, `filter()`, and `reduce()` differ in purpose?
// 8. Implement `Array.prototype.myMap()` (polyfill).

// ---

// ### **Strings**

// 9. Write a function to check if a string is a palindrome.
// 10. How would you reverse each word in a sentence while keeping the order of words intact?
//     Example: `"Hello World"` → `"olleH dlroW"`

// ---

// ### **Objects**

// 11. Difference between:

// ```js
// const obj = { a: 1 };
// const obj2 = obj;
// obj2.a = 5;
// console.log(obj.a);
// ```

// 12. How to **clone an object** (3 ways)?
// 13. Explain what `Object.keys()`, `Object.values()`, and `Object.entries()` return.

// ---

// ---

// ##  **2. Tricky Interview Questions**

// (These test deep understanding)

// ### **Variables & Scope**

// 1. What will be logged?

// ```js
// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;
// ```

// (Explain **hoisting** and **TDZ**.)

// 2. Explain this:

// ```js
// console.log([] == ![]);
// ```

// ---

// ### **Operators**

// 3. What will this log?

// ```js
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);
// ```

// 4. What is the output of:

// ```js
// console.log("5" - - "2");
// ```

// ---

// ### **Arrays**

// 5. Difference between:

// ```js
// console.log([1,2] + [3,4]);
// console.log([1,2].concat([3,4]));
// ```

// 6. Explain:

// ```js
// const arr = [1,2,3];
// console.log(arr.map(parseInt));
// ```

// (Why unexpected results?)

// ---

// ### **Strings & Objects**

// 7. What happens here?

// ```js
// const obj = { a: 1 };
// console.log(obj.toString());
// ```

// 8. Explain difference between:

// ```js
// null == undefined;
// null === undefined;
// ```

// ---

// ---

// ##  **3. Real-Time Use Cases & Mini Challenges**

// (Practical tasks for projects)

// ### **Array Use Cases**

// 1. **Shopping Cart Total**
//    Given:

// ```js
// const cart = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 800 }
// ];
// ```

// **Task:** Calculate the total price of items in the cart.

// ---

// 2. **Find Most Frequent Element**
//    Input: `[1,2,2,3,3,3,4]` → Output: `3`

// ---

// 3. **Remove Falsy Values**
//    Input: `[0, 1, false, 2, "", 3]` → Output: `[1, 2, 3]`

// ---

// ### **String Use Cases**

// 4. **Capitalize Every Word**
//    Input: `"hello world"` → Output: `"Hello World"`

// 5. **Anagram Check**
//    Check if two strings are anagrams:
//    `"listen"` & `"silent"`

// ---

// ### **Object Use Cases**

// 6. **Convert Object to Query String**
//    Input:

// ```js
// { name: "John", age: 25 }
// ```

// Output:

// ```
// "name=John&age=25"
// ```

// ---

// 7. **Group Objects by Property**
//    Input:

// ```js
// [
//   { name: "Alice", city: "NY" },
//   { name: "Bob", city: "LA" },
//   { name: "Eve", city: "NY" }
// ]
// ```

// Output:

// ```js
// {
//   NY: ["Alice", "Eve"],
//   LA: ["Bob"]
// }
// ```

// ---

//  **Do you want me to prepare:**
// ✔ A **full question bank** (50+ questions) with **answers and explanations** for these topics?
// ✔ A **coding assignment sheet** (real-time problem-solving tasks for students)?
// ✔ A **separate tricky interview question set** with solutions?

// Which one should I give you first?
