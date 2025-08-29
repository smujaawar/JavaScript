// Great question! **Event bubbling** and **event capturing** are part of the **Event Propagation Model** in JavaScript that describes **how events travel through the DOM tree** when an event (like a click) occurs.

// ---

// ##  **What is Event Propagation?**

// When you click on an element inside another element (e.g., a `<li>` inside a `<ul>` inside `<div>`), the event does not just happen on the clicked element. It **travels through multiple phases**:

// ### **Three Phases of Event Propagation**

// 1. **Capturing Phase** (a.k.a. *trickle down*):

//    * Event starts from the **window → document → body → parent → target**.
//    * Moves from **outermost ancestor** down to the **target element**.

// 2. **Target Phase**:

//    * Event reaches the actual element that was clicked (the **target**).

// 3. **Bubbling Phase** (a.k.a. *bubble up*):

//    * Event travels back up from **target → parent → body → document → window**.

// ---

// ###  **Why does it happen?**

// * So you can **handle events at different levels** (target, parent, ancestor).
// * For example:

//   * Capturing lets you **intercept events early** before they hit the target.
//   * Bubbling lets you **delegate events** to a parent instead of each child (efficient for dynamic content).

// ---

// ##  **Example: Bubbling vs Capturing**

// HTML:

// ```html
// <div id="grandparent" style="padding:20px; background:#eee;">
//     Grandparent
//     <div id="parent" style="padding:20px; background:#ccc;">
//         Parent
//         <button id="child">Click Me</button>
//     </div>
// </div>
// ```

// JavaScript:

// ```javascript
// // Capturing Phase (third parameter = true)
// document.getElementById("grandparent").addEventListener("click", () => {
//     console.log("Grandparent - Capturing");
// }, true);

// document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent - Capturing");
// }, true);

// document.getElementById("child").addEventListener("click", () => {
//     console.log("Child - Capturing");
// }, true);

// // Bubbling Phase (default or third parameter = false)
// document.getElementById("grandparent").addEventListener("click", () => {
//     console.log("Grandparent - Bubbling");
// });

// document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent - Bubbling");
// });

// document.getElementById("child").addEventListener("click", () => {
//     console.log("Child - Bubbling");
// });
// ```

// ---

// ###  **What Happens When You Click `#child`?**

// **Order of Logs:**

// 1. `Grandparent - Capturing`
// 2. `Parent - Capturing`
// 3. `Child - Capturing`
// 4. `Child - Bubbling`
// 5. `Parent - Bubbling`
// 6. `Grandparent - Bubbling`

// ---

// ###  **Key Differences**

// | Feature   | Capturing                    | Bubbling                      |
// | --------- | ---------------------------- | ----------------------------- |
// | Direction | Top → Down (window → target) | Bottom → Up (target → window) |
// | Default   | Disabled                     | Enabled (true by default)     |
// | Use Case  | Intercept events early       | Event delegation              |

// ---

// ###  **Why Useful in Real Life?**

// * **Event Delegation**: Instead of adding a click listener to every `<li>`, you add **one listener to the `<ul>`** and use bubbling to detect which `<li>` was clicked.
// * **Prevent Early Actions**: Capturing is useful for **analytics, logging, or canceling events before they reach the target**.

// ---

// **Why does event bubbling and capturing exist instead of just triggering the clicked element?** Let’s dig deep.

// ---

// ##  **Why not just trigger the target element?**

// If the event only happened on the exact element you clicked, you would **lose flexibility** in handling interactions at higher levels of the DOM.

// Imagine:

// * You have **100 buttons inside a container**, and you want to do something whenever any button is clicked.
// * Without bubbling, you would have to attach **100 separate listeners** (performance issue).
// * With bubbling, you can add **ONE listener on the container** and detect which button was clicked (**event delegation**).

// ---

// ##  **Why does bubbling & capturing exist?**

// **Because of the DOM tree structure and inheritance:**

// * The DOM is hierarchical. A button is inside a `div`, which is inside `body`, etc.
// * When an event occurs on a nested element, the browser needs to notify all elements that **might care about this action**.
// * This allows **different layers of UI to react differently**:

//   * A button handles the click for its own purpose.
//   * The parent may update analytics or UI layout.
//   * The body may log user activity globally.

// This design gives developers **fine-grained control**:

// * **Capturing phase**: Intercept event early (e.g., prevent something before it reaches the button).
// * **Bubbling phase**: React to the event after the target handles it (e.g., parent menu closing after a submenu click).

// ---

// ###  **Real-World Analogy**

// Think of **mail delivery**:

// * You live in an apartment. A letter arrives for you.
// * The process:

//   1. **Capturing phase**: Letter enters the building (gatekeeper checks).
//   2. Goes to your apartment (target phase).
//   3. **Bubbling phase**: If you refuse it, it goes back through the same route (for logging or return).

// If the mail went straight to you and nowhere else, the security and tracking layers would never know.

// ---

// ##  **Advantages of Bubbling & Capturing**

// ✔ **Efficiency** – One listener can manage many child elements.
// ✔ **Flexibility** – Higher-level elements can add global behaviors (menus, modals, analytics).
// ✔ **Control** – You can **stopPropagation()** if you want to prevent it.
// ✔ **Custom Behavior** – Multiple layers of UI can respond differently to the same event.

// ---

// ##  **What if we didn't have it?**

// * You'd have to **attach listeners to every individual element**.
// * No **event delegation** → Bad for performance on large apps (imagine a table with 10,000 cells).
// * Frameworks like React, Vue, Angular **depend on bubbling** for efficient event handling.

// ---

// ###  **Example: Event Delegation (Why Bubbling Rocks)**

// Instead of:

// ```javascript
// document.querySelectorAll('li').forEach(li => {
//   li.addEventListener('click', () => console.log('Clicked:', li.textContent));
// });
// ```

// We do:

// ```javascript
// document.querySelector('ul').addEventListener('click', (e) => {
//   if (e.target.tagName === 'LI') {
//     console.log('Clicked:', e.target.textContent);
//   }
// });
// ```

// **One listener handles unlimited `li`s**, even if added dynamically later.

// ---

// ###  **In short:**

// * Bubbling & capturing **aren't a bug**, they are a **feature** for scalability and control.
// * And you can **opt out anytime** by using:

//   ```javascript
//   event.stopPropagation();
//   ```
