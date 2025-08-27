// Here’s the **complete breakdown for “Closures in JavaScript”** using the structured prompt:

// ---

// ##  1. **Introduction – What is a Closure?**

// A **closure** is a feature in JavaScript where an inner function has access to:

// * Its **own scope** (variables declared inside it),
// * The **scope of its outer function**, and
// * The **global scope**.

// In simple words:

// > **Closure = Function + its lexical scope even after the outer function has finished executing.**

// What is a Closure?
// A closure is created when a function is defined inside another function, and the inner function has access to variables from the outer function's scope - even after the outer function has finished executing. The inner function "closes over" or "captures" the outer function's variables.

// How Closures Work ?
// When JavaScript creates a function, it also creates a lexical environment that includes all the variables that were in scope when the function was defined. This environment persists even after the outer function returns.

// ---

// ##  2. **Why do we use Closures?**

// Closures allow:

// * **Data privacy & encapsulation** → Hiding variables from the global scope.
// * **State preservation** → Remember values between function calls.
// * **Functional programming** → Used in callbacks, higher-order functions.
// * **Advanced patterns** → Currying, memoization, module pattern.

// ---

// ##  3. **How does it work internally?**

// Closures are possible because of **Lexical Scoping** and the **JavaScript Execution Context**:

// * When a function is defined inside another function, it remembers its parent scope (lexical environment).
// * Even after the parent function has returned, the inner function still retains a reference to its outer scope.

// ---

// ##  4. **Syntax & Simple Examples**

// ### **Basic Closure Example**

// ```javascript
// function outer() {
//   let counter = 0; // outer scope variable

//   function inner() {
//     counter++;
//     console.log(counter);
//   }

//   return inner;
// }

// const increment = outer();
// increment(); // 1
// increment(); // 2
// increment(); // 3
// ```

// **Explanation:**

// * `outer()` returns `inner`.
// * Even though `outer()` is finished, `inner` still has access to `counter`.

// ---

// ##  5. **Real-world Use Cases**

// * **Data privacy:**

// ```javascript
// function createBankAccount() {
//   let balance = 0;

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log(`Balance: ${balance}`);
//     },
//     withdraw(amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         console.log(`Balance: ${balance}`);
//       } else {
//         console.log("Insufficient funds");
//       }
//     }
//   };
// }

// const account = createBankAccount();
// account.deposit(100); // Balance: 100
// account.withdraw(50); // Balance: 50
// ```

// * **Event Listeners**:
//   Closures help event callbacks remember variables.
// * **setTimeout in a loop**:

// ```javascript
// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// // Output: 4 4 4 (closure issue with var)
// ```

// ---

// ##  6. **Advantages & Disadvantages**

// ✔ **Advantages**

// * Data hiding & encapsulation
// * State management
// * Useful in functional programming

// ✖ **Disadvantages**

// * **Memory leaks** (if references not cleaned)
// * **Harder to debug**
// * Overuse can lead to complexity

// ---

// ##  7. **Common Mistakes & Best Practices**

//  Mistake:

// ```javascript
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// // Outputs 3 three times (not expected)
// ```

//  Fix with `let`:

// ```javascript
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// ```

// ---

// ##  8. **Advanced Usage**

// * **Currying**:

// ```javascript
// function multiply(a) {
//   return function(b) {
//     return a * b;
//   };
// }
// const double = multiply(2);
// console.log(double(5)); // 10
// ```

// * **Memoization**:

// ```javascript
// function memoize(fn) {
//   const cache = {};
//   return function(x) {
//     if (cache[x]) return cache[x];
//     const result = fn(x);
//     cache[x] = result;
//     return result;
//   };
// }
// const square = memoize(n => n * n);
// console.log(square(4)); // 16
// ```

// ---

// ##  9. **Comparison with Similar Concepts**

// * **Closure vs Block Scope**: Closures rely on **function scope**, block scope uses `let`/`const`.
// * **Closure vs Global Variables**: Closures give controlled access, globals are open to all.

// ---

// ##  10. **Most Asked Interview Questions**

// 1. What is a closure in JavaScript?
// 2. Give a real-world example of closures.
// 3. How are closures implemented internally?
// 4. What is the difference between closure and scope?
// 5. How do you solve the `setTimeout` + `var` issue?
// 6. Can closures cause memory leaks? How?
// 7. How do closures relate to the event loop?
// 8. Explain a scenario where you used closure in a project.
// 9. Implement a private counter using closure.
// 10. Write a function using closure that generates a unique ID on each call.

// ---

// ##  11. **Performance Considerations**

// * Closures keep variables in memory even after the outer function is done → **can increase memory usage**.
// * Clean up references when not needed.

// ---

// ##  12. **Visual Aid (Mental Model)**

// Imagine **a backpack**:

// * The inner function carries a backpack (closure) containing variables from the outer function.

// ---

// ##  13. **Additional Tips**

// * Use closures **intentionally**, not everywhere.
// * Great for modular code.
// * Combine with IIFE for safe scoping.

// ---

// Is it mandatory to return a fucntion to persist the closure??

// Great question! The short answer is:

//  **No, it’s not mandatory to return the inner function to create a closure.**
// Closures are created as soon as an inner function **accesses variables from its outer scope**, regardless of whether you return it or not.

// ---

// ###  But why do people often return the inner function?
// Because **returning (or storing) the inner function** is the easiest way to **observe that the closure persists even after the outer function has finished executing**.

// ---

// ###  Three scenarios:

// #### **1. Inner function called immediately (your case)**
// ```javascript
// function outer() {
//   let a = 10;
//   function inner(b) {
//     console.log(a + b);
//   }
//   inner(4); // called inside outer
// }
// outer();
// ```
// - **Closure exists temporarily** while `outer()` is running.
// - After `outer()` ends, `a` is no longer needed → garbage collected.
// - So closure existed, but it didn’t **persist**.

// ---

// #### **2. Returning the inner function**
// ```javascript
// function outer() {
//   let a = 10;
//   return function inner(b) {
//     console.log(a + b);
//   };

// }

// const fn = outer();
// fn(4); // 14
// ```
// - Here, the inner function **escapes outer’s scope**.
// - Even though `outer()` finished, `a` is still alive because the returned function holds a reference.
// - This is a **persistent closure**.

// ---

// #### **3. Storing the inner function somewhere (not return)**
// ```javascript
// let saved;

// function outer() {
//   let a = 10;
//   function inner(b) {
//     console.log(a + b);
//   }
//   saved = inner; // store it globally
// }

// outer();
// saved(4); // 14
// ```
// - Same effect as returning: the closure persists because `saved` references `inner`.

// ---

// ###  So, the rule is:
// - **Closure = Inner function accessing outer variables.**
// - **Persistent closure = That inner function is kept alive after outer finishes (by returning or storing it somewhere).**

// ---

// function outer() {
//   let a = 10;
//   function inner() {
//     const sum = a + b;
//     console.log(sum);
//   }
//   inner();
// }
// outer();

// **5 simple closure examples** (from beginner to practical use) with explanations:

// ---

// ###  **1. Basic Closure**

// **Example:**

// ```javascript
// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// const fn = outer();
// fn(); // Output: 10
// ```

// **Explanation:**

// * `inner()` uses variable `a` from `outer()` even after `outer()` has finished executing.
// * This is a closure because **the inner function “closes over” the variable `a`**.

// ---

// ###  **2. Closure with Parameters**

// **Example:**

// ```javascript
// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// console.log(add5(10)); // Output: 15
// ```

// **Explanation:**

// * `makeAdder` creates a function that remembers `x`.
// * Even after `makeAdder` returns, `add5` can access `x`.

// ---

// ###  **3. Counter using Closure**

// **Example:**

// ```javascript
// function createCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// ```

// **Explanation:**

// * `count` is private and cannot be accessed directly.
// * Each call to `counter()` updates the same `count` because of closure.

// **Real-world use:** Track number of button clicks without using global variables.

// ---

// ###  **4. Private Data (Encapsulation)**

// **Example:**

// ```javascript
// function createBankAccount(initialBalance) {
//   let balance = initialBalance;
//   return {
//     deposit: function(amount) {
//       balance += amount;
//       return balance;
//     },
//     withdraw: function(amount) {
//       balance -= amount;
//       return balance;
//     }
//   };
// }

// const account = createBankAccount(100);
// console.log(account.deposit(50));  // 150
// console.log(account.withdraw(30)); // 120
// ```

// **Explanation:**

// * `balance` is **private**; you can only modify it using the returned methods.
// * This simulates **data hiding**, like in OOP.

// ---

// ###  **5. Closures Inside Loops**

// **Example (Fixing var issue):**

// ```javascript
// function createButtons() {
//   for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//       console.log("Button", i);
//     }, i * 1000);
//   }
// }

// createButtons();
// // Button 1
// // Button 2
// // Button 3
// ```

// **Explanation:**

// * `let` creates a new binding for each iteration, so the closure captures the correct `i`.
// * With `var`, you’d get `Button 4` three times (classic interview trap).

// ---

//  **Closures are mostly used for**:

// * **Data privacy** (like bank account example)
// * **Function factories** (makeAdder example)
// * **Callbacks and async operations**
// * **Memoization** (caching results)

// ---
