// ##  **What is an Event Listener?**

// * An **event listener** is a function in JavaScript that waits for an event to happen on an element (like a click, keypress, scroll, etc.) and then runs some code.
// * Events are **user interactions** (click, hover, typing) or **browser actions** (page load, resize).

// ---

// ###  **Basic Syntax**

// ```javascript
// element.addEventListener(event, handler, useCapture);
// ```

// * `element` → The target element (like `button` or `window`).
// * `event` → Event name as a string (e.g., `"click"`, `"keydown"`).
// * `handler` → Callback function to execute when event occurs.
// * `useCapture` → Optional boolean (`true` = capturing phase, `false` = bubbling phase).

// ---

// ##  **Example**

// ```javascript
// document.getElementById("btn").addEventListener("click", function() {
//   alert("Button Clicked!");
// });
// ```

// ---

// ##  **Why use `addEventListener` instead of `onclick`?**

// * `onclick` → You can only assign **one handler**.
// * `addEventListener` → You can assign **multiple handlers** for the same event without overwriting.

// **Example:**

// ```javascript
// const btn = document.getElementById("btn");

// btn.onclick = () => console.log("First");
// btn.onclick = () => console.log("Second"); // Overwrites first

// btn.addEventListener("click", () => console.log("First"));
// btn.addEventListener("click", () => console.log("Second")); // Both run
// ```

// ---

// ##  **Common Events**

// * **Mouse Events**: `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove`
// * **Keyboard Events**: `keydown`, `keyup`, `keypress`
// * **Form Events**: `submit`, `change`, `input`, `focus`, `blur`
// * **Window Events**: `load`, `resize`, `scroll`

// ---

// ##  **Event Object**

// Every event listener receives an `event` object automatically, with useful info:

// ```javascript
// document.addEventListener("click", function(e) {
//   console.log(e.type);   // Event type: "click"
//   console.log(e.target); // Element clicked
//   console.log(e.clientX, e.clientY); // Mouse position
// });
// ```

// ---

// ##  **Event Phases**

// When an event occurs, it travels through **three phases**:

// 1. **Capturing Phase** (outer → inner)
// 2. **Target Phase** (actual element)
// 3. **Bubbling Phase** (inner → outer)

// Default is **bubbling** (false).
// Set `useCapture = true` for capturing.

// **Example:**

// ```javascript
// parent.addEventListener("click", () => console.log("Parent"), true);  // Capturing
// child.addEventListener("click", () => console.log("Child"), false);   // Bubbling
// ```

// ---

// ##  **Event Bubbling and Delegation**

// * **Event Bubbling**: Event moves up from the target element to ancestors.
// * **Event Delegation**: Attach one listener to a parent instead of multiple children.

// **Example of Delegation:**

// ```javascript
// document.querySelector("#list").addEventListener("click", (e) => {
//   if(e.target.tagName === "LI") {
//     console.log("Clicked on", e.target.textContent);
//   }
// });
// ```

// ---

// ##  **Removing Event Listeners**

// Use `removeEventListener` with the **same function reference**:

// ```javascript
// function sayHello() {
//   console.log("Hello");
// }
// btn.addEventListener("click", sayHello);
// btn.removeEventListener("click", sayHello);
// ```

// ---

// ##  **One-Time Event Listener**

// Use `{ once: true }`:

// ```javascript
// btn.addEventListener("click", () => console.log("Clicked once"), { once: true });
// ```

// ---

// ##  **Passive Event Listener (for performance)**

// Useful for scroll/touch events to improve performance:

// ```javascript
// window.addEventListener("scroll", () => console.log("Scrolling"), { passive: true });
// ```

// ---

// ##  **Keyboard Event Example**

// ```javascript
// document.addEventListener("keydown", (e) => {
//   if(e.key === "Enter") {
//     console.log("Enter key pressed");
//   }
// });
// ```

// ---

// ##  **Best Practices**

// ✔ Use `addEventListener` instead of inline `onclick`.
// ✔ Use **event delegation** for dynamic elements.
// ✔ Always **remove listeners** when not needed (memory leaks).
// ✔ Prefer **named functions** over anonymous for easy removal.
// ✔ Use `{ passive: true }` for scroll/touch performance.

// ---

// ##  **Real-World Use Cases**

// 1. **Form validation**

// ```javascript
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Form submitted!");
// });
// ```

// 2. **Dynamic UI updates**

// ```javascript
// document.getElementById("themeBtn").addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });
// ```

// 3. **Modal open/close**

// ```javascript
// openBtn.addEventListener("click", () => modal.style.display = "block");
// closeBtn.addEventListener("click", () => modal.style.display = "none");
// ```

// ---

// ###  **Summary**

// * **addEventListener** → flexible, supports multiple handlers
// * **Event Object** → info about event
// * **Phases** → Capturing, Target, Bubbling
// * **Delegation** → handle multiple child events via parent
// * **Advanced options** → `{ once: true, passive: true }`

// ---
