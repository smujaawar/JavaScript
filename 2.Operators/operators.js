// Here’s an **in-depth explanation of JavaScript operators** with clear definitions, **categories**, **examples**, and **industry relevance** (which ones you must master because they are used daily in real-world projects).

// ---

// #  **JavaScript Operators (In-Depth)**

// ---

// ## **What are Operators in JavaScript?**

// Operators are **symbols or keywords** used to perform operations on **operands** (values or variables).
// Example:

// ```javascript
// let a = 10, b = 5;
// console.log(a + b); // + is an operator
// ```

// ---

// ##  **Categories of Operators**

// JavaScript has several categories of operators:

// 1. **Arithmetic Operators**
// 2. **Assignment Operators**
// 3. **Comparison (Relational) Operators**
// 4. **Logical Operators**
// 5. **Unary Operators**
// 6. **Ternary (Conditional) Operator**
// 7. **String Operators**
// 8. **Type Operators**
// 9. **Bitwise Operators**
// 10. **Spread & Rest Operators (ES6+)**

// ---

// ## **1. Arithmetic Operators**

// Used for **mathematical operations**.

// | Operator | Meaning             | Example  | Result |
// | -------- | ------------------- | -------- | ------ |
// | `+`      | Addition            | `5 + 2`  | `7`    |
// | `-`      | Subtraction         | `5 - 2`  | `3`    |
// | `*`      | Multiplication      | `5 * 2`  | `10`   |
// | `/`      | Division            | `10 / 2` | `5`    |
// | `%`      | Modulus (Remainder) | `5 % 2`  | `1`    |
// | `**`     | Exponentiation      | `2 ** 3` | `8`    |

// **Example:**

// ```javascript
// let a = 10, b = 3;
// console.log(a + b);  // 13
// console.log(a % b);  // 1
// console.log(2 ** 4); // 16
// ```

//  **Most Used in Industry:** `+`, `-`, `*`, `/`, `%`
// (especially `%` for tasks like checking even/odd, cyclic rotations).

// ---

// ## **2. Assignment Operators**

// Used to **assign values** to variables.

// | Operator | Meaning           | Example  | Equivalent To |
// | -------- | ----------------- | -------- | ------------- |
// | `=`      | Assign            | `x = 10` | `x = 10`      |
// | `+=`     | Add & Assign      | `x += 5` | `x = x + 5`   |
// | `-=`     | Subtract & Assign | `x -= 5` | `x = x - 5`   |
// | `*=`     | Multiply & Assign | `x *= 2` | `x = x * 2`   |
// | `/=`     | Divide & Assign   | `x /= 2` | `x = x / 2`   |
// | `%=`     | Modulus & Assign  | `x %= 3` | `x = x % 3`   |

// **Example:**

// ```javascript
// let x = 10;
// x += 5;  // x = 15
// x *= 2;  // x = 30
// ```

//  **Most Used:** `=`, `+=`, `-=`, especially in **loops and counters**.

// ---

// ## **3. Comparison (Relational) Operators**

// Used to **compare two values** and return **Boolean** (`true` or `false`).

// | Operator | Meaning                     | Example     | Result  |
// | -------- | --------------------------- | ----------- | ------- |
// | `==`     | Equal (value only)          | `5 == "5"`  | `true`  |
// | `===`    | Strict Equal (value & type) | `5 === "5"` | `false` |
// | `!=`     | Not Equal (value only)      | `5 != "5"`  | `false` |
// | `!==`    | Strict Not Equal            | `5 !== "5"` | `true`  |
// | `>`      | Greater Than                | `7 > 3`     | `true`  |
// | `<`      | Less Than                   | `7 < 3`     | `false` |
// | `>=`     | Greater or Equal            | `7 >= 7`    | `true`  |
// | `<=`     | Less or Equal               | `7 <= 3`    | `false` |

// **Example:**

// ```javascript
// console.log(5 == "5");   // true
// console.log(5 === "5");  // false
// ```

//  **Most Used in Industry:** `===` and `!==` (always use strict comparison in real projects to avoid bugs).

// ---

// ## **4. Logical Operators**

// Used for **logical conditions**, especially in **if statements**.

// | Operator | Meaning | Example         | Result |        |   |         |      |
// | -------- | ------- | --------------- | ------ | ------ | - | ------- | ---- |
// | `&&`     | AND     | `true && false` | false  |        |   |         |      |
// | \`       |         | \`              | OR     | \`true |   | false\` | true |
// | `!`      | NOT     | `!true`         | false  |        |   |         |      |

// **Example:**

// ```javascript
// let age = 20;
// if(age >= 18 && age <= 60) {
//   console.log("Eligible");
// }
// ```

//  **Most Used:** `&&` and `||` (especially in **React conditional rendering** and form validations).

// ---

// ## **5. Unary Operators**

// Operate on a **single operand**.

// | Operator | Meaning         | Example          | Result    |
// | -------- | --------------- | ---------------- | --------- |
// | `++`     | Increment       | `x++`            | x + 1     |
// | `--`     | Decrement       | `x--`            | x - 1     |
// | `typeof` | Type of a value | `typeof 10`      | "number"  |
// | `delete` | Remove property | `delete obj.key` | true      |
// | `void`   | Discards result | `void(0)`        | undefined |

// **Example:**

// ```javascript
// let x = 5;
// console.log(typeof x); // "number"
// ```

//  **Most Used:** `typeof`, `++`, `--` (loops, debugging).

// ---

// ## **6. Ternary Operator (Conditional)**

// Shorthand for `if-else`.

// **Syntax:**

// ```javascript
// condition ? valueIfTrue : valueIfFalse;
// ```

// **Example:**

// ```javascript
// let age = 18;
// let msg = (age >= 18) ? "Adult" : "Minor";
// console.log(msg); // "Adult"
// ```

//  **Industry Use:** Very common for **conditional rendering** in React.

// ---

// ## **7. String Operators**

// `+` and `+=` can **concatenate strings**.

// **Example:**

// ```javascript
// let name = "John";
// let greet = "Hello " + name;
// console.log(greet); // "Hello John"
// ```

//  **Used daily in UI text building**.

// ---

// ## **8. Type Operators**

// * **`typeof`** → returns data type.
// * **`instanceof`** → checks if an object is an instance of a class.

// **Example:**

// ```javascript
// console.log(typeof "Hello"); // "string"
// console.log([] instanceof Array); // true
// ```

// ---

// ## **9. Bitwise Operators** (Rarely Used)

// `&`, `|`, `^`, `~`, `<<`, `>>`.
// Used for **low-level operations** like encryption or performance optimization (rare in frontend).

// ---

// ## **10. Spread & Rest Operators (ES6+)**

// * **Spread (`...`)**: Expands an array/object.
// * **Rest (`...`)**: Collects multiple arguments into an array.

// **Example:**

// ```javascript
// let arr = [1, 2, 3];
// let arr2 = [...arr, 4]; // [1, 2, 3, 4]

// function sum(...nums) {
//   return nums.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3)); // 6
// ```

//  **Industry Use:** Very common in **React props**, **Redux reducers**, and **object immutability**.

// ---

// ##  **Most Important Operators in Real Projects**

// 1. **`===` and `!==`** → Strict comparison (essential for avoiding bugs).
// 2. **`&&`, `||`, `!`** → Conditional checks and rendering.
// 3. **`+` for strings and numbers**.
// 4. **`? :` (Ternary)** → Common in React JSX.
// 5. **`typeof`** → Debugging and type checking.
// 6. **Spread & Rest (`...`)** → ES6 standard in modern code.

// ---

// ###  **Practical Use in Industry**

// * **Form validation:**

//   ```javascript
//   if(name && email) { submitForm(); }
//   ```
// * **Conditional Rendering in React:**

//   ```jsx

//   {isLoggedIn ? <Dashboard /> : <Login />}
//   ```
// * **State updates in Redux:**

//   ```javascript
//   return {...state, user: action.payload};
//   ```

// -----------------------------------------------------------------------------------------------

//  **comprehensive list of tricky questions and exercises based on JavaScript operators**

// ###  **Tricky Interview Questions**

// 1. What is the output of:

//    ```javascript
//    console.log(2 + "2");
//    console.log(2 - "2");
//    ```
// 2. What is the difference between `==` and `===` in JavaScript?
// 3. What is the output of:

//    ```javascript
//    console.log(0 == false);
//    console.log(0 === false);
//    ```
// 4. What is the result of:

//    ```javascript
//    console.log(null == undefined);
//    console.log(null === undefined);
//    ```
// 5. Predict the output:

//    ```javascript
//    console.log(1 < 2 < 3);
//    console.log(3 > 2 > 1);
//    ```
// 6. What will this log?

//    ```javascript
//    console.log(typeof null);
//    console.log(typeof []);
//    ```
// 7. What is the result of:

//    ```javascript
//    console.log([] + []);
//    console.log([] + {});
//    console.log({} + []);
//    ```
// 8. What is the difference between `++i` and `i++`? Which one returns the updated value immediately?
// 9. Explain short-circuit evaluation in `&&` and `||`. Give an example.
// 10. Why is `typeof null === "object"` considered a bug in JavaScript?

// ---

// ###  **Small Coding Exercises**

// 1. Write a program to check whether a number is **even or odd** using the **ternary operator**.
// 2. Swap two numbers without using a third variable, only using **arithmetic operators**.
// 3. Find the **maximum of two numbers** using a **ternary operator** (no `if-else`).
// 4. Predict the output:

//    ```javascript
//    console.log(0 && "Hello");
//    console.log(1 || "Hello");
//    ```
// 5. Merge two arrays without using `concat()`, only using the **spread operator**.
// 6. Write a function that determines the **type** of a given value using `typeof`.
// 7. Write code to toggle a boolean variable’s value using the **NOT operator**.
// 8. Write a program to increment a number by **1** without using `+` or `-` (hint: use `++` or bitwise operators).
// 9. Explain the difference between `&` and `&&` in JavaScript with an example.
// 10. Write a program to convert a number to a boolean using **double NOT (`!!`)** operator.
// 11. Predict the output:

//     ```javascript
//     console.log(true + true);
//     console.log("5" - 2);
//     console.log("5" + 2);
//     ```
// 12. Write a program to find whether a number lies between 10 and 20 using **comparison operators**.
// 13. Using the **nullish coalescing operator (`??`)**, set a default value if a variable is `null` or `undefined`.
// 14. Explain the difference between `||` and `??` with an example.
// 15. Write a program to compare two objects using `==` and `===` and explain the result.
// 16. Predict the output:

//     ```javascript
//     console.log(0 || "Default");
//     console.log("" || "Default");
//     console.log(null ?? "Default");
//     ```

// ---

// ******************************Solutions*********************************

//  These are designed for **beginner-to-intermediate level** and are often asked in **interviews and real-world assessments**.

// ---

// #  **Tricky Interview Questions on JavaScript Operators**

// ---

// ## **Q1. What is the output?**

// ```javascript
// console.log(2 + "2");
// console.log(2 - "2");
// ```

// ###  **Answer:**

// ```
// "22"
// 0
// ```

// ###  **Explanation:**

// * `+` with a string → **string concatenation**.
// * `-` tries to **convert strings to numbers**, so `"2"` becomes `2`.

// ---

// ## **Q2. What is the output?**

// ```javascript
// console.log(0 == false);
// console.log(0 === false);
// ```

// ###  **Answer:**

// ```
// true
// false
// ```

// ###  **Explanation:**

// * `==` → loose comparison → converts `false` to `0`.
// * `===` → strict comparison → checks value & type (different types → false).

// ---

// ## **Q3. What is the output?**

// ```javascript
// console.log(null == undefined);
// console.log(null === undefined);
// ```

// ###  **Answer:**

// ```
// true
// false
// ```

// ###  **Explanation:**

// * `null` and `undefined` are **loosely equal**, but not strictly equal.

// ---

// ## **Q4. What will this log?**

// ```javascript
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);
// ```

// ###  **Answer:**

// ```
// true
// false
// ```

// ###  **Explanation:**

// * `1 < 2` → `true`. Then `true < 3` → `1 < 3` → `true`.
// * `3 > 2` → `true`. Then `true > 1` → `1 > 1` → `false`.

// ---

// ## **Q5. Output of this snippet?**

// ```javascript
// console.log(typeof null);
// console.log(typeof []);
// ```

// ###  **Answer:**

// ```
// object
// object
// ```

// ###  **Explanation:**

// * `typeof null` is a long-standing JavaScript **bug** (it should be `null` but returns `object`).
// * Arrays are **objects** in JavaScript.

// ---

// ## **Q6. What is the result of this?**

// ```javascript
// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// ```

// ###  **Answer:**

// ```
// ""
// "[object Object]"
// 0
// ```

// ###  **Explanation:**

// * `[] + []` → `""` (empty string).
// * `[] + {}` → `"[object Object]"`.
// * `{} + []` → Interpreted as a block `{}` then `+ []` → `+[]` → `0`.

// ---

// ---

// #  **Small Coding Exercises (with Solutions)**

// ---

// ### **Exercise 1: Check Even or Odd using Ternary**

// **Question:**
// Write a program that takes a number and prints **"Even"** if it’s even, otherwise **"Odd"**, using a **ternary operator**.

// **Solution:**

// ```javascript
// let num = 7;
// let result = (num % 2 === 0) ? "Even" : "Odd";
// console.log(result); // "Odd"
// ```

// **Explanation:**
// `num % 2` gives remainder. If `0`, number is even.

// ---

// ### **Exercise 2: Swap Two Numbers Without a Third Variable**

// **Question:**
// Swap `a = 5` and `b = 10` using **arithmetic operators**.

// **Solution:**

// ```javascript
// let a = 5, b = 10;
// a = a + b; // 15
// b = a - b; // 5
// a = a - b; // 10
// console.log(a, b); // 10 5
// ```

// **Explanation:**
// Used `+` and `-` for swapping.

// ---

// ### **Exercise 3: Find Maximum of Two Numbers Using Ternary**

// **Question:**
// Find the largest of two numbers without `if-else`.

// **Solution:**

// ```javascript
// let a = 12, b = 25;
// let max = (a > b) ? a : b;
// console.log(max); // 25
// ```

// ---

// ### **Exercise 4: Short-Circuit Evaluation**

// **Question:**
// Predict the output:

// ```javascript
// console.log(0 && "Hello");
// console.log(1 || "Hello");
// ```

// **Answer:**

// ```
// 0
// 1
// ```

// **Explanation:**

// * `&&` returns **first falsy** value or last truthy.
// * `||` returns **first truthy** value.

// ---

// ### **Exercise 5: Using Spread Operator**

// **Question:**
// Merge two arrays without using `concat()`.

// **Solution:**

// ```javascript
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let merged = [...arr1, ...arr2];
// console.log(merged); // [1, 2, 3, 4]
// ```

// ---

// ### **Exercise 6: Type Check**

// **Question:**
// Write a function that prints whether a given value is a number, string, or boolean.

// **Solution:**

// ```javascript
// function checkType(value) {
//   console.log(typeof value);
// }

// checkType(42);       // number
// checkType("Hello");  // string
// checkType(true);     // boolean
// ```

// ---

// ---

// ##  **Extra Industry-Relevant Interview Questions**

// 1. **What is the difference between `==` and `===`? Which should you use and why?**
//    (Answer: Always `===` to avoid type coercion bugs.)

// 2. **Explain short-circuiting in `&&` and `||`. How is it used in React?**
//    (Example: `{isLoggedIn && <Dashboard />}`)

// 3. **What is the difference between `++i` and `i++`? Which is more efficient?**
//    (Answer: `++i` increments and returns new value immediately, `i++` returns old value first.)

// 4. **Why is `typeof null === "object"` a bug?**
//    (Because of legacy implementation in JS.)

// ---

// ****************tricky questions in-depth explanation****************

// ##  **Part 1:**
// ```javascript
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);
// ```

// ### **First line:**
// ```javascript
// 1 < 2 < 3
// ```
// - JavaScript evaluates from **left to right**.
// - Step 1: `1 < 2` → `true`.
// - Now expression becomes:
//   ```javascript
//   true < 3
//   ```
// - In comparisons, `true` is converted to `1` (type coercion).
// - So:
//   ```javascript
//   1 < 3  // true
//   ```
//  **Result:** `true`.

// ---

// ### **Second line:**
// ```javascript
// 3 > 2 > 1
// ```
// - Step 1: `3 > 2` → `true`.
// - Now:
//   ```javascript
//   true > 1
//   ```
// - Again, `true` → `1`.
// - So:
//   ```javascript
//   1 > 1  // false
//   ```
//  **Result:** `false`.

// ---

// ### **Why?**
// Because `<` and `>` **are left-associative** and comparisons happen in order. After the first comparison, the result (`true` or `false`) gets **coerced to a number** when compared again.

// ---

//  **Final Output:**
// ```
// true
// false
// ```

// ---

// ---

// ##  **Part 2:**
// ```javascript
// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// ```

// ### **Rule:**
// The `+` operator does **addition** for numbers, but if any operand is an **object (including arrays)**, it tries to convert them to **primitive** (string or number) using `toString()` or `valueOf()`.

// ---

// #### **First line:**
// ```javascript
// [] + []
// ```
// - Both are empty arrays.
// - When converted to primitive:
//   ```javascript
//   [].toString()  // ""
//   ```
// - So:
//   ```javascript
//   "" + ""  // ""
//   ```
//  **Result:** `""` (empty string).

// ---

// #### **Second line:**
// ```javascript
// [] + {}
// ```
// - First operand `[]` → `""`.
// - Second operand `{}` → `"[object Object]"`.
// - So:
//   ```javascript
//   "" + "[object Object]"  // "[object Object]"
//   ```
//  **Result:** `"[object Object]"`.

// ---

// #### **Third line:**
// ```javascript
// {} + []
// ```
//  **Tricky because of JavaScript parsing rules**:
// - `{}` at the beginning of a statement is treated as a **block**, not an object literal.
// - So the engine sees:
//   ```javascript
//   {}   // an empty block
//   + [] // unary plus applied to []
//   ```
// - `+ []` means:
//   - Convert `[]` to a number → `0` (because empty array → `""` → `0`).
// - So:
//   ```javascript
//   0
//   ```
//  **Result:** `0`.

// ---

//  **Final Output:**
// ```
// ""
// "[object Object]"
// 0
// ```

// ---

// ###  **Key Concepts You Learned Here:**
// ✔ Type coercion in chained comparisons.
// ✔ `true` → `1`, `false` → `0` when used with `<` or `>`.
// ✔ `+` operator forces **string conversion** for arrays and objects.
// ✔ JavaScript parsing quirk with `{}` at start of a line.
