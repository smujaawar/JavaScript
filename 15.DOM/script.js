// ✔ Selecting elements (getElementById, querySelector, etc.)
// ✔ Creating & appending elements
// ✔ Modifying attributes & styles
// ✔ Working with innerText / innerHTML
// ✔ Event listeners (click, input)
// ✔ Event bubbling & capturing
// ✔ DOM Traversal (parent, children, siblings)
// ✔ Removing elements
// ✔ Dynamic classes
// ✔ Forms & input handling

// What This Demonstrates
// DOM Selection: getElementById, querySelector
// Style Manipulation: element.style
// Content Update: textContent, innerHTML
// Create/Append Elements: createElement, appendChild
// Event Handling: addEventListener (click, input)
// Event Bubbling & Capturing
// Event Delegation (using e.target)
// DOM Traversal: parentElement, firstElementChild, nextElementSibling
// Attribute Manipulation: setAttribute, getAttribute
// Class Manipulation: classList.add, classList.toggle
// Remove Elements: removeChild

// === 1. SELECT ELEMENTS ===
const title = document.getElementById("title");
const nameInput = document.querySelector("#nameInput");
const addBtn = document.querySelector("#addBtn");
const removeBtn = document.getElementById("removeBtn");
const nameList = document.getElementById("nameList");
const infoBox = document.getElementById("infoBox");

// === 2. MODIFY CONTENT & STYLE ===
title.style.color = "blue";
title.textContent = "DOM Features Demonstration";

// === 3. EVENT LISTENER (Click) ===
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    alert("Please enter a name!");
    return;
  }

  // === 4. CREATE ELEMENT & APPEND ===
  const li = document.createElement("li");
  li.textContent = name;

  // Add class dynamically
  li.classList.add("name-item");

  nameList.appendChild(li);
  nameInput.value = "";
});

// === 5. EVENT DELEGATION (Bubbling) ===
nameList.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "LI") {
    // Toggle highlight class
    e.target.classList.toggle("highlight");
    infoBox.textContent = `You clicked: ${e.target.textContent}`;
  }
});

// === 6. REMOVE ELEMENT ===
removeBtn.addEventListener("click", () => {
  if (nameList.lastElementChild) {
    nameList.removeChild(nameList.lastElementChild);
  } else {
    alert("No names to remove!");
  }
});

// === 7. FORM INPUT EVENT ===
nameInput.addEventListener("input", (e) => {
  infoBox.textContent = `Typing: ${e.target.value}`;
});

// === 8. DOM TRAVERSAL ===
console.log("Parent of nameList:", nameList.parentElement.tagName);
console.log("First child of nameList:", nameList.firstElementChild.textContent);
console.log("Next sibling of nameList:", nameList.nextElementSibling?.id);

// === 9. ATTRIBUTE MANIPULATION ===
nameInput.setAttribute("maxlength", "20");
console.log("Placeholder:", nameInput.getAttribute("placeholder"));

// === 10. CAPTURING PHASE EXAMPLE ===
document.body.addEventListener(
  "click",
  () => console.log("Body clicked (Capturing)"),
  true
);
