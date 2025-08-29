// ##  **What is DOM?**

// * **DOM** stands for **Document Object Model**.
// * It is a **programming interface** for HTML and XML documents.
// * When a browser loads a webpage:

//   * It parses the HTML and creates a **tree-like structure of nodes**.
//   * This structure is the **DOM**, which represents the document as objects that can be manipulated using JavaScript.
// * DOM allows you to:

//   * **Access** HTML elements
//   * **Modify** content, styles, and attributes
//   * **Add or remove** elements dynamically
//   * **Handle events** like clicks, input, etc.

// ---

// ###  **DOM vs HTML**

// * **HTML** is the static code.
// * **DOM** is the live representation of the HTML in memory that JavaScript can manipulate.

// ---

// ##  **DOM Tree Structure**

// Every HTML document is converted into a tree of nodes.

// Example HTML:

// ```html
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Page</title>
//   </head>
//   <body>
//     <h1>Hello</h1>
//     <p>Welcome!</p>
//   </body>
// </html>
// ```

// DOM Tree:

// ```
// document
// └── html
//     ├── head
//     │   └── title
//     └── body
//         ├── h1
//         └── p
// ```

// ---

// ###  **DOM Nodes**

// 1. **Document Node** → `document`
// 2. **Element Nodes** → `<html>`, `<body>`, `<p>` etc.
// 3. **Attribute Nodes** → class, id, href
// 4. **Text Nodes** → actual text inside elements

// ---

// ##  **Accessing DOM Elements**

// JavaScript uses `document` object to access and manipulate DOM.

// **Methods:**

// 1. **By ID**

// ```javascript
// document.getElementById("myId");
// ```

// 2. **By Class**

// ```javascript
// document.getElementsByClassName("myClass");
// ```

// 3. **By Tag**

// ```javascript
// document.getElementsByTagName("p");
// ```

// 4. **By CSS Selector**

// ```javascript
// document.querySelector(".myClass");      // first match
// document.querySelectorAll(".myClass");  // all matches
// ```

// ---

// ##  **DOM Properties**

// * `innerHTML` → get/set HTML content
// * `textContent` → text only
// * `value` → for input fields
// * `style` → inline CSS
// * `attributes` → element attributes

// **Example:**

// ```javascript
// let el = document.getElementById("demo");
// el.innerHTML = "Hello World!";
// el.style.color = "red";
// ```

// ---

// ##  **Modifying DOM**

// ### **1. Change Content**

// ```javascript
// document.getElementById("demo").innerHTML = "New Text";
// ```

// ### **2. Change Attribute**

// ```javascript
// document.getElementById("myImg").src = "new.jpg";
// ```

// ### **3. Change CSS**

// ```javascript
// document.querySelector("h1").style.color = "blue";
// ```

// ---

// ##  **Creating & Removing Elements**

// **Create Element**

// ```javascript
// let newDiv = document.createElement("div");
// newDiv.textContent = "Hello!";
// document.body.appendChild(newDiv);
// ```

// **Remove Element**

// ```javascript
// let el = document.getElementById("demo");
// el.remove();
// ```

// ---

// ##  **Traversing DOM**

// * `parentNode` → parent
// * `childNodes` → all children (including text nodes)
// * `children` → only element children
// * `firstChild`, `lastChild`
// * `nextSibling`, `previousSibling`

// **Example:**

// ```javascript
// let parent = document.getElementById("child").parentNode;
// ```

// ---

// ##  **DOM Events**

// Events allow you to respond to user actions.

// **Common events:**

// * `onclick`, `onchange`, `onkeyup`, `onload`

// **Example:**

// ```javascript
// document.getElementById("btn").addEventListener("click", () => {
//   alert("Button Clicked!");
// });
// ```

// ---

// ##  **Event Object**

// When an event occurs, an event object is passed to the handler.

// **Example:**

// ```javascript
// document.addEventListener("click", function(e) {
//   console.log(e.type);  // "click"
//   console.log(e.target); // clicked element
// });
// ```

// ---

// ##  **Event Bubbling & Capturing**

// * **Bubbling**: Event flows from inner to outer elements.
// * **Capturing**: Event flows from outer to inner.

// **Example:**

// ```javascript
// parent.addEventListener("click", handler, true); // capturing
// parent.addEventListener("click", handler, false); // bubbling
// ```

// ---

// ##  **DOM Collections vs NodeList**

// * `getElementsByClassName` → **HTMLCollection**
// * `querySelectorAll` → **NodeList**
//   Both are **array-like**, but not arrays.

// ---

// ##  **Real-World Use Cases**

// 1. **Form validation**
// 2. **Dynamic content loading**
// 3. **Creating interactive UIs**
// 4. **Building single-page apps**

// ---

// ###  **DOM vs BOM**

// | Feature    | DOM           | BOM               |
// | ---------- | ------------- | ----------------- |
// | Represents | Web page      | Browser window    |
// | Root       | `document`    | `window`          |
// | Example    | `<p>` element | history, location |

// ---

// ###  **Quick Summary**

// * **DOM = dynamic representation of HTML**
// * You can **read**, **modify**, and **listen to events**
// * Use **selectors** (`getElementById`, `querySelector`) to target elements
// * Modify **content**, **attributes**, **styles**
// * Handle **events** with `addEventListener`

// ---

// Difference bw **`querySelector`** and **`querySelectorAll`** are both DOM methods in JavaScript for selecting elements, but they work differently. Let’s break it down clearly.

// ---

// ##  **`document.querySelector()`**

// * Returns **the first element** in the DOM that matches the **CSS selector** you provide.
// * If no match is found, returns **`null`**.
// * Works on **document** or any specific element (like `element.querySelector()`).

// ### Example:

// ```javascript
// let firstDiv = document.querySelector('div');
// console.log(firstDiv); // The first <div> in the document
// ```

// ---

// ##  **`document.querySelectorAll()`**

// * Returns **a NodeList of all elements** that match the CSS selector.
// * The NodeList is **static** (does NOT update automatically when DOM changes).
// * If no match is found, returns an **empty NodeList** (not `null`).
// * You can loop over it using `for...of` or convert it to an array.

// ### Example:

// ```javascript
// let allDivs = document.querySelectorAll('div');
// console.log(allDivs); // NodeList of all <div> elements
// ```

// ---

// ##  **Key Differences Table**

// | Feature            | `querySelector`        | `querySelectorAll`               |
// | ------------------ | ---------------------- | -------------------------------- |
// | Returns            | First matching element | All matching elements (NodeList) |
// | If no match        | `null`                 | Empty NodeList                   |
// | Data type          | `Element`              | `NodeList`                       |
// | How many elements  | One (first match)      | All matches                      |
// | Can loop directly? | No (single element)    | Yes (with `for...of`)            |

// ---

// ###  **Practical Example**

// HTML:

// ```html
// <div class="box">Box 1</div>
// <div class="box">Box 2</div>
// <div class="box">Box 3</div>
// ```

// JavaScript:

// ```javascript
// let firstBox = document.querySelector('.box');
// console.log(firstBox.textContent); // "Box 1"

// let allBoxes = document.querySelectorAll('.box');
// allBoxes.forEach(box => console.log(box.textContent));
// // Output:
// // Box 1
// // Box 2
// // Box 3
// ```

// ---

// ###  **When to use which?**

// * Use **`querySelector`** when you only need **one element** (first match).
// * Use **`querySelectorAll`** when you need **multiple elements**.

// ---

//  **Extra Tip:** Both methods support **complex CSS selectors**:

// ```javascript
// document.querySelector('ul li:last-child');
// document.querySelectorAll('div.box[data-id="123"]');
// ```

// ---

// The differences between **`innerText`**, **`textContent`**, and **`innerHTML`** in JavaScript can be confusing because they all deal with the content inside an element—but they behave differently. Let’s break it down.

// ---

// ##  **1. `innerText`**

// * Represents **the visible text** inside an element (what the user sees).
// * Respects **CSS styles** like `display:none` or `visibility:hidden` → these texts will NOT appear in `innerText`.
// * Causes **reflow/repaint** because it calculates styles (slower than `textContent`).
// * Ignores hidden text and extra spaces.

// ### Example:

// ```html
// <div id="demo">
//     Hello <span style="display:none">World</span>
// </div>
// ```

// ```javascript
// console.log(document.getElementById('demo').innerText);
// // Output: "Hello"  (World is hidden, so not included)
// ```

// ---

// ##  **2. `textContent`**

// * Represents **all text inside the element**, including hidden text.
// * **Does NOT respect CSS** (even hidden text is included).
// * Much **faster** than `innerText` because it doesn’t calculate styles.
// * Preserves text exactly as in the DOM (except scripts).

// ### Example:

// ```javascript
// console.log(document.getElementById('demo').textContent);
// // Output: "Hello World"  (hidden text included)
// ```

// ---

// ##  **3. `innerHTML`**

// * Returns **the HTML markup inside the element**, not just text.
// * Includes tags, attributes, and text.
// * Allows you to **set new HTML** (can be dangerous if using user input → XSS risk).

// ### Example:

// ```javascript
// console.log(document.getElementById('demo').innerHTML);
// // Output: "Hello <span style="display:none">World</span>"
// ```

// ---

// ###  **Comparison Table**

// | Property      | Returns Visible Only?  | Includes HTML Tags? | Performance | Common Use         |
// | ------------- | ---------------------- | ------------------- | ----------- | ------------------ |
// | `innerText`   |  Yes                  |  No                | Slower      | What user sees     |
// | `textContent` |  No (includes hidden) |  No                | Faster      | Get/set plain text |
// | `innerHTML`   |  No                   |  Yes               | Moderate    | Get/set HTML       |

// ---

// ###  **Setting Values**

// ```javascript
// element.innerText = "<b>Bold?</b>";     // Displays: <b>Bold?</b> (as text)
// element.textContent = "<b>Bold?</b>";  // Displays: <b>Bold?</b> (as text)
// element.innerHTML = "<b>Bold?</b>";    // Displays: Bold? (in bold)
// ```

// ---

//  **In short:**

// * **Use `innerText`** → When you care about what the user **actually sees**.
// * **Use `textContent`** → When you need **all text (hidden included)**, and for **performance**.
// * **Use `innerHTML`** → When you need to read/write **HTML structure**.
