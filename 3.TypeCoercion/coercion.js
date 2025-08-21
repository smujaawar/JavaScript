// Type coercion in JavaScript is one of the most **interview-heavy** and **real-world relevant** concepts because JavaScript is a **dynamically typed language**, meaning variables can hold values of any type, and the language often **automatically converts (coerces) values** when an operation expects a certain type.

// We’ll break this into **4 sections** for clarity:

// ---

// ##  1. **What is Type Coercion?**

// **Definition:**
// Type coercion is the process by which JavaScript **automatically or implicitly converts values from one data type to another** (like string to number, boolean to number, etc.), often during comparisons or operations.

// * It happens **implicitly** when using operators like `+`, `-`, `==`.
// * It can also be **explicit** when you manually convert using `Number()`, `String()`, etc.

// ---

// ##  2. **Types of Type Coercion**

// There are **three main kinds**:

// ### **A) To String**

// * Happens when:

//   * Using `+` with a string and another type.
// * Example:

//   ```javascript
//   console.log(1 + "2"); // "12"
//   console.log(true + " test"); // "true test"
//   console.log([] + "1"); // "1"
//   ```
// * Explanation: Anything concatenated with a string → becomes string.

// ---

// ### **B) To Number**

// * Happens when:

//   * Using arithmetic operators (`-`, `*`, `/`, `%`) or `+` in unary form.
// * Example:

//   ```javascript
//   console.log("5" - 2); // 3
//   console.log("10" * "2"); // 20
//   console.log(true + 1); // 2
//   console.log(false - 1); // -1
//   console.log([] - 1); // -1 ([] becomes "")
//   console.log([2] - 1); // 1
//   ```
// * Explanation:

//   * `"5"` → 5
//   * `true` → 1
//   * `false` → 0
//   * `null` → 0
//   * `undefined` → NaN

// ---

// ### **C) To Boolean**

// * Happens in:

//   * `if` conditions, logical operators (`||`, `&&`, `!`).
// * **Falsy values** (convert to `false`):
//   `0`, `""`, `null`, `undefined`, `NaN`, `false`.
// * Everything else → `true`.
// * Example:

//   ```javascript
//   console.log(Boolean(0)); // false
//   console.log(Boolean("hello")); // true
//   console.log(!!"test"); // true (double NOT trick)
//   ```

// ---

// ##  3. **Important Rules & Tricky Scenarios**

// These are **must-know for interviews and debugging in projects**:

// ---

// ### ** Rule 1: + operator**

// * If **one operand is a string**, the other will be converted to string.
// * Otherwise, both are converted to numbers.
// * Example:

//   ```javascript
//   console.log(1 + "2"); // "12"
//   console.log(1 + 2 + "3"); // "33" (first numbers then string)
//   console.log("1" + 2 + 3); // "123" (string from start)
//   ```

// ---

// ### ** Rule 2: - operator**

// * Always converts both sides to **number**.
// * Example:

//   ```javascript
//   console.log("5" - "2"); // 3
//   console.log("5" - 2);   // 3
//   console.log("5" - true); // 4
//   console.log("5" - null); // 5
//   console.log("5" - undefined); // NaN
//   ```

// ---

// ### ** Rule 3: Comparison (== vs ===)**

// * `==` performs type coercion.
// * `===` checks value and type (no coercion).
// * Tricky:

//   ```javascript
//   console.log(0 == false); // true
//   console.log(0 === false); // false
//   console.log(null == undefined); // true
//   console.log(null === undefined); // false
//   console.log([] == false); // true ([] → "" → 0)
//   console.log([1] == true); // true ([1] → "1" → 1)
//   ```

// ---

// ### ** Rule 4: Logical operators (&& and ||)**

// * Do **not** return booleans necessarily.
// * They return the **last evaluated value**.
// * Example:

//   ```javascript
//   console.log(0 || "Hello"); // "Hello" (because 0 is falsy)
//   console.log(1 && "Hello"); // "Hello" (because both truthy)
//   console.log(null && "Hello"); // null
//   ```

// ---

// ### ** Rule 5: Unary plus**

// * Converts to number:

//   ```javascript
//   console.log(+"5"); // 5
//   console.log(+true); // 1
//   console.log(+false); // 0
//   console.log(+null); // 0
//   console.log(+undefined); // NaN
//   ```

// ---

// ### ** Rule 6: Weird but common**

// ```javascript
// console.log([] + []); // ""
// console.log([] + {}); // "[object Object]"
// console.log({} + []); // 0
// console.log([] == ![]); // true
// ```

// * Explanation:

//   * `[] == ![]`:

//     * `![]` → `false`
//     * `[] == false` → `"" == false` → `0 == 0` → `true`.

// ---

// ##  4. **Interview & Project Relevance**

// ### **Where Type Coercion Matters in Real Projects**

// * **Form input values:** Always come as strings → must be converted before math.
// * **API data:** JSON often returns strings → need explicit conversion.
// * **Conditional checks:** Misusing `==` can introduce hidden bugs.
// * **Authentication checks:** `if (userId)` vs `if (userId === 0)`.

// ---

// ##  **Pro Tip:** Always use `===` for comparisons and explicit conversions like:

// ```javascript
// Number("5"), String(123), Boolean(value)
// ```

// ---

// ---

// ##  **(A) Type Coercion Conversion Table**
// This table shows **what happens when values are converted to String, Number, or Boolean**.

// | Value        | To String      | To Number       | To Boolean  |
// |-------------|--------------|---------------|------------|
// | `undefined` | `"undefined"` | `NaN`         | `false`    |
// | `null`      | `"null"`      | `0`           | `false`    |
// | `true`      | `"true"`      | `1`           | `true`     |
// | `false`     | `"false"`     | `0`           | `false`    |
// | `""` (empty string) | `""` | `0` | `false` |
// | `"123"`     | `"123"`       | `123`         | `true`     |
// | `"abc"`     | `"abc"`       | `NaN`         | `true`     |
// | `0`         | `"0"`         | `0`           | `false`    |
// | `1`         | `"1"`         | `1`           | `true`     |
// | `NaN`       | `"NaN"`       | `NaN`         | `false`    |
// | `[]`        | `""`          | `0`           | `true`     |
// | `[1]`       | `"1"`         | `1`           | `true`     |
// | `[1,2]`     | `"1,2"`       | `NaN`         | `true`     |
// | `{}`        | `"[object Object]"` | `NaN`    | `true`     |
// | `function(){}` | `"function(){}"` | `NaN`    | `true`     |

// **Key quirks to remember:**
// - `[]` → `""` (empty string when converted to string).
// - `[]` → `0` (when converted to number).
// - `{}` → `NaN` (when converted to number).
// - `null` → `0` (number), `false` (boolean).
// - `undefined` → `NaN` (number), `false` (boolean).

// ---

// ##  **(B) 10 Tricky Interview Questions on Type Coercion**
// (With **answers and explanations**)

// ---

// ### **Q1**
// ```javascript
// console.log(1 + "2" + 3);
// ```
//  **Answer:** `"123"`
// **Why:** Left to right: `1 + "2"` → `"12"`, then `"12" + 3` → `"123"`.

// ---

// ### **Q2**
// ```javascript
// console.log("5" - 2);
// ```
//  **Answer:** `3`
// **Why:** `-` converts both sides to numbers: `5 - 2 = 3`.

// ---

// ### **Q3**
// ```javascript
// console.log([] + []);
// ```
//  **Answer:** `""` (empty string)
// **Why:** `[]` → `""`, so `"" + "" = ""`.

// ---

// ### **Q4**
// ```javascript
// console.log([] + {});
// console.log({} + []);
// ```
//  **Answer:**
// - `[] + {}` → `"[object Object]"`
// - `{} + []` → `0`
// **Why:**
// - First case: `[]` → `""`, `{}` → `"[object Object]"` → concatenation.
// - Second case: The `{}` is parsed as a block, so `+[]` → `0`.

// ---

// ### **Q5**
// ```javascript
// console.log(false == "0");
// ```
//  **Answer:** `true`
// **Why:** `false` → `0`, `"0"` → `0`.

// ---

// ### **Q6**
// ```javascript
// console.log(null == 0);
// ```
//  **Answer:** `false`
// **Why:** `null` only equals `undefined` with `==`, not `0`.

// ---

// ### **Q7**
// ```javascript
// console.log([] == ![]);
// ```
//  **Answer:** `true`
// **Why:**
// - `![]` → `false`.
// - So `[] == false`.
// - `[]` → `""` → `0`, `false` → `0`.
// - `0 == 0` → `true`.

// ---

// ### **Q8**
// ```javascript
// console.log(+"");
// ```
//  **Answer:** `0`
// **Why:** Unary `+` converts to number: `""` → `0`.

// ---

// ### **Q9**
// ```javascript
// console.log(1 < 2 < 3);
// ```
//  **Answer:** `true`
// **Why:**
// - `1 < 2` → `true`.
// - `true < 3` → `1 < 3` → `true`.

// ---

// ### **Q10**
// ```javascript
// console.log(3 > 2 > 1);
// ```
//  **Answer:** `false`
// **Why:**
// - `3 > 2` → `true`.
// - `true > 1` → `1 > 1` → `false`.

// ---

// ---

// ##  **(C) Mini Coding Challenge Set for Students**
// These are **practical, interview-style exercises** based on type coercion.

// ---

// ### **Exercise 1**
// Predict the output:
// ```javascript
// console.log("10" + 10 - 10);
// ```

// ---

// ### **Exercise 2**
// Predict the output:
// ```javascript
// console.log([] + 10);
// ```

// ---

// ### **Exercise 3**
// Predict the output:
// ```javascript
// console.log(true + true + "false");
// ```

// ---

// ### **Exercise 4**
// Predict the output:
// ```javascript
// console.log([] == ![]);
// ```

// ---

// ### **Exercise 5**
// Predict the output:
// ```javascript
// console.log(null + 1);
// console.log(undefined + 1);
// ```

// ---

// ### **Exercise 6**
// Predict the output:
// ```javascript
// console.log("5" - "2" + "1");
// ```

// ---

// ### **Exercise 7**
// Predict the output:
// ```javascript
// console.log(!!"");
// console.log(!!"hello");
// ```

// ---

// ### **Exercise 8**
// Predict the output:
// ```javascript
// console.log([] + {});
// console.log({} + []);
// ```

// ---

// ### **Exercise 9**
// Predict the output:
// ```javascript
// console.log(+true + +false);
// ```

// ---

// ### **Exercise 10**
// Predict the output:
// ```javascript
// console.log("0" == false);
// console.log("0" === false);
// ```
