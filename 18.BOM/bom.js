// The **BOM (Browser Object Model)** in JavaScript is a set of objects provided by the browser that allows JavaScript to interact with the browser environment, outside of the web page content (which is managed by the DOM).

// Think of it like this:

// * **DOM** = Represents the structure of the web page (HTML & CSS).
// * **BOM** = Represents the browser environment in which that page runs.

// ###  **What is BOM?**

// * BOM stands for **Browser Object Model**.
// * It provides objects and methods to interact with:

//   * The browser window
//   * Browser history
//   * Browser location (URL)
//   * Browser navigation
//   * Dialog boxes
//   * Screen details, etc.
// * BOM is **not standardized by W3C** like the DOM; it’s implemented by browsers, but most features are consistent across modern browsers.

// ---

// ###  **Main Objects in BOM**

// The root object is the **`window`** object. Everything else in BOM is a property of `window`.

// #### **1. `window` Object**

// * Represents the browser window or tab.
// * Global object in the browser.
// * Every global variable and function in JavaScript becomes a property of `window`.

// **Examples:**

// ```javascript
// console.log(window.innerWidth);  // Width of the viewport
// console.log(window.innerHeight); // Height of the viewport

// window.alert("Hello!");          // Shows alert box
// ```

// Common properties of `window`:

// * `innerWidth` / `innerHeight` → viewport size
// * `outerWidth` / `outerHeight` → full window size including toolbars
// * `document` → the DOM object
// * `console` → the console object
// * `localStorage`, `sessionStorage`

// ---

// #### **2. `document` Object**

// * Technically part of DOM, but accessed via `window.document`.
// * Represents the web page (HTML).

// ---

// #### **3. `navigator` Object**

// * Gives information about the browser and system.

// **Example:**

// ```javascript
// console.log(navigator.userAgent);   // Browser details
// console.log(navigator.language);    // Browser language
// console.log(navigator.onLine);      // Online status (true/false)
// ```

// ---

// #### **4. `location` Object**

// * Represents the current URL.
// * Allows reading or changing the URL.

// **Properties:**

// * `location.href` → full URL
// * `location.protocol` → protocol (`http:`, `https:`)
// * `location.hostname` → domain
// * `location.pathname` → path
// * `location.search` → query string

// **Methods:**

// * `location.reload()` → reload page
// * `location.assign("https://example.com")` → navigate to new URL
// * `location.replace("https://example.com")` → replace current page

// **Example:**

// ```javascript
// console.log(location.href);   // Current page URL
// location.reload();            // Reloads page
// ```

// ---

// #### **5. `history` Object**

// * Represents the browser history.
// * Allows navigation through history (limited for security reasons).

// **Methods:**

// * `history.back()` → go back one page
// * `history.forward()` → go forward one page
// * `history.go(n)` → go to nth page in history (negative for back)

// **Example:**

// ```javascript
// history.back();    // Same as clicking back button
// history.go(-2);    // Go 2 steps back
// ```

// ---

// #### **6. `screen` Object**

// * Provides information about the user’s screen.

// **Properties:**

// * `screen.width` / `screen.height` → Screen resolution
// * `screen.availWidth` / `screen.availHeight` → Available space excluding taskbar

// **Example:**

// ```javascript
// console.log(screen.width, screen.height);
// ```

// ---

// #### **7. Dialog Boxes (BOM Methods)**

// * `alert("message")` → Show alert
// * `confirm("Are you sure?")` → Returns `true` or `false`
// * `prompt("Enter your name")` → Returns user input or `null`

// **Example:**

// ```javascript
// let name = prompt("Enter your name:");
// if(confirm("Are you sure?")) {
//     alert("Hello " + name);
// }
// ```

// ---

// ###  **Event Loop with BOM**

// * The **`window.setTimeout()`** and **`window.setInterval()`** methods come from BOM.
// * These methods allow scheduling code execution.

// **Example:**

// ```javascript
// setTimeout(() => console.log("Executed after 2 sec"), 2000);
// ```

// ---

// ###  **Summary Diagram**

// ```
// BOM (Browser Object Model)
// |
// +-- window
//     |
//     +-- document (DOM)
//     +-- navigator
//     +-- location
//     +-- history
//     +-- screen
//     +-- alert(), confirm(), prompt()
//     +-- setTimeout(), setInterval()
// ```

// ---

// ###  **Why is BOM important?**

// * Enables JavaScript to **control browser behavior**.
// * Without BOM, JavaScript could only modify page content (DOM).
// * With BOM, we can redirect, reload, get browser details, detect online status, etc.

// ---
// ************************************************************************************
// ---

// ###  **Why is BOM important?**

// * Lets you:

//   * Control the browser window size and features
//   * Navigate to different URLs
//   * Access browser history
//   * Detect browser details
//   * Show alerts, prompts, confirmations
//   * Work with timers (`setTimeout`, `setInterval`)

// ---

// ##  **Main Components of BOM**

// The **BOM hierarchy**:

// ```
// window
// │
// ├── document (DOM)
// ├── location
// ├── navigator
// ├── history
// ├── screen
// ├── alert(), confirm(), prompt()
// └── setTimeout(), setInterval()
// ```

// ---

// ### **1. `window` Object**

// * Represents the **browser window or tab**.
// * Global object for all BOM and DOM properties.
// * All global variables and functions are automatically properties of `window`.

// **Examples:**

// ```javascript
// console.log(window.innerWidth);  // Viewport width
// console.log(window.innerHeight); // Viewport height

// window.alert("Hello!");          // Alert box
// ```

// **Common properties:**

// * `innerWidth`, `innerHeight` → size of the visible page
// * `outerWidth`, `outerHeight` → entire browser window size
// * `document` → the DOM object
// * `localStorage`, `sessionStorage`
// * `console`

// ---

// ### **2. `navigator` Object**

// Provides information about the browser and the user's system.

// **Properties:**

// * `navigator.userAgent` → Browser info
// * `navigator.language` → Current language
// * `navigator.onLine` → true if online
// * `navigator.geolocation` → Geolocation API

// **Example:**

// ```javascript
// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator.onLine);
// ```

// ---

// ### **3. `location` Object**

// Represents the **current URL** and allows navigation.

// **Properties:**

// * `location.href` → Full URL
// * `location.protocol` → `http:` / `https:`
// * `location.hostname` → Domain name
// * `location.pathname` → Path after domain
// * `location.search` → Query string

// **Methods:**

// * `location.reload()` → Reload the page
// * `location.assign("url")` → Navigate to a new page
// * `location.replace("url")` → Replace current page (no back)

// **Example:**

// ```javascript
// console.log(location.href);  // Current URL
// location.reload();           // Reload the page
// ```

// ---

// ### **4. `history` Object**

// Handles browser history.

// **Methods:**

// * `history.back()` → Go one step back
// * `history.forward()` → Go one step forward
// * `history.go(n)` → Move n steps (negative = back)

// **Example:**

// ```javascript
// history.back();
// history.go(-2);
// ```

// ---

// ### **5. `screen` Object**

// Provides information about the user's screen.

// **Properties:**

// * `screen.width`, `screen.height` → Screen resolution
// * `screen.availWidth`, `screen.availHeight` → Available space

// **Example:**

// ```javascript
// console.log(screen.width, screen.height);
// ```

// ---

// ### **6. Dialog Boxes (BOM Methods)**

// * `alert("message")` → Shows alert
// * `confirm("Are you sure?")` → Returns `true`/`false`
// * `prompt("Enter your name")` → Returns user input

// **Example:**

// ```javascript
// let name = prompt("Enter your name:");
// if(confirm("Are you sure?")) {
//     alert("Hello " + name);
// }
// ```

// ---

// ### **7. Timers (BOM Methods)**

// * `setTimeout(function, ms)` → Runs once after delay
// * `setInterval(function, ms)` → Runs repeatedly
// * `clearTimeout(id)` / `clearInterval(id)` → Stops timers

// **Example:**

// ```javascript
// setTimeout(() => console.log("Hello after 2 sec"), 2000);
// let id = setInterval(() => console.log("Repeating..."), 1000);
// clearInterval(id); // stop repeating
// ```

// ---

// ###  **Other BOM Features**

// * **Opening and closing windows**:

// ```javascript
// let win = window.open("https://google.com", "_blank", "width=400,height=400");
// win.close();
// ```

// * **Scroll methods**:

// ```javascript
// window.scrollBy(0, 100); // scroll down 100px
// window.scrollTo(0, 0);   // scroll to top
// ```

// ---

// ###  **BOM vs DOM**

// | Feature     | BOM                          | DOM              |
// | ----------- | ---------------------------- | ---------------- |
// | Represents  | Browser environment          | Web page content |
// | Root object | `window`                     | `document`       |
// | Examples    | history, location, navigator | HTML elements    |

// ---

// ###  **Real-Time Use Cases**

// 1. **Redirect user after login**:

// ```javascript
// if(isLoggedIn) location.href = "/dashboard.html";
// ```

// 2. **Detect offline/online status**:

// ```javascript
// window.addEventListener('online', () => console.log('You are online'));
// window.addEventListener('offline', () => console.log('You are offline'));
// ```

// 3. **Get screen resolution for responsive design**:

// ```javascript
// console.log(`Screen: ${screen.width}x${screen.height}`);
// ```

// 4. **Show confirmation before leaving page**:

// ```javascript
// window.onbeforeunload = () => "Are you sure you want to leave?";
// ```
