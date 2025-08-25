console.log(document);
console.dir(document);

console.log(document.body);
// console.log((document.body.innerHTML = "Hello World"));

// document.body.innerHTML = "Hello World";
document.body.innerHTML = "<h1>Hello World</h1>";
// document.body.innerText = "Hello World";

document.body.innerHTML = document.body.innerHTML + "<button>CLick me</button>";

//Style

console.log(document.body.style);
//we use camel case to give css property in js because "-"is operator in js

document.body.style.color = "blue";
document.body.style.backgroundColor = "lightblue";
