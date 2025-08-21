// console.log("Hello, World!");
// //Primitive Data types (immutable)
// let a = 2;
// let b = a;
// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);

// let str = "Hello";
// let str1 = str;

// console.log(str);
// console.log(str1);

// str1 = str1 + " world";
// console.log(str);
// console.log(str1);

// //Primitive Data types (mutable)

// let arr = [10, 20, 30];
// let arr1 = arr;

// console.log(arr);
// console.log(arr1);

// arr[1] = 40;
// console.log(arr);
// console.log(arr1);

// let obj = {
//   name: "sam",
//   age: 20,
// };

// let obj2 = obj;
// console.log(obj);
// console.log(obj2);

// obj.name = "John";
// console.log(obj);
// console.log(obj2);

// *****************Execution Context*******************

// console.log(a);
// console.log(b);
// console.log(c);

// debugger;
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

function add(a, b) {
  let sum = a + b;
  return sum;
}

const add1 = add(5, 5);
const add2 = add(15, 15);

console.log(add1);
console.log(add2);

// console.log(window);

// ******************Hoisting***********************

var a = 10;
function hello() {
  console.log("Hello World");
}
hello();

const fun2 = () => {
  console.log("Hello World 2");
};

fun2();
