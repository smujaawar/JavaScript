// console.log(this);

// // document.getElementById("hello").addEventListener("click", () => {
// //   console.log("clicked");
// // });

// const newButton = document.getElementById("hello");

// newButton.addEventListener("click", () => {
//   newButton.style.color = "red";
// });

const parent = document.getElementById("parent");
const child = document.getElementById("child");
const btn = document.getElementById("btn");

// // Capturing (true)
// parent.addEventListener("click", () => console.log("Parent Capturing"), true);
// child.addEventListener("click", () => console.log("Child Capturing"), true);
// btn.addEventListener("click", () => console.log("Button Capturing"), true);

// Bubbling (false)
// parent.addEventListener("click", () => console.log("Parent Bubbling"), false);
// child.addEventListener("click", () => console.log("Child Bubbling"), false);
// btn.addEventListener("click", () => console.log("Button Bubbling"), false);
