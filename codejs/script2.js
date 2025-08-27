// //types of functions

// //named fun

// function add() {
//   console.log("Named fun");
// }
// add();

// //anonymous fun

// const fun = function () {
//   console.log("Anonymous fun");
// };

// fun();

// //arrow fun

// const arrow = (a, b) => {
//   let sum = a + b;
//   console.log(sum);
// };

// arrow(2, 4);

//iife

// (function () {
//   console.log("IIFE");
// })();

// //HOF
// function cacl(sub) {
//   sub();
// }
// cacl(sub);

//callback fun
// function sub() {
//   console.log("sub");
// }

// setTimeout(() => {
//   console.log("1sec");
// }, 1000);

// const timer = setInterval(() => {
//   console.log("interval");
// }, 1000);

//callback

//1.fetchData
//2.processData
//3.storeData

// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched");
//     callback();
//   }, 1000);
// }

// function processData(callback) {
//   setTimeout(() => {
//     console.log("Data Processed");
//     callback();
//   }, 1000);
// }

// function storeData() {
//   setTimeout(() => {
//     console.log("Data Stored");
//   }, 1000);
// }

// fetchData(() => processData(() => storeData()));

// Promises

// const myPromise = new Promise((resolve, reject) => {
//   let promise = false;
//   if (promise) {
//     resolve("promise successful");
//   } else {
//     reject("Promise Rejected");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data Fetched");
//       resolve();
//     }, 1000);
//   });
// }

// function processData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data Processed");
//       resolve();
//     }, 1000);
//   });
// }

// function storeData() {
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log("Data stored");
//     }, 1000);
//   });
// }

// fetchData()
//   .then(() => processData().then(() => storeData()))
//   .catch();

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let fetch = true;

//       if (fetch) {
//         resolve("fetch the data");
//       } else {
//         reject("fetch failed");
//       }
//     }, 1000);
//   });
// }

// function convertData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let convert = true;
//       if (convert) {
//         resolve("data converted");
//       } else {
//         reject("conversion failed");
//       }
//     }, 1000);
//   });
// }

// function displayData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let display = false;
//       if (display) {
//         resolve("Display the data");
//       } else {
//         reject("diplay failed");
//       }
//     }, 1000);
//   });
// }

// fetchData()
//   .then((message) => {
//     console.log(message);
//     return convertData();
//   })
//   .then((message) => {
//     console.log(message);
//     return displayData();
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally executed");
//   });

//Destructuring?

// let arr = [10, 20, 30, 40, 50, 60, 651, 61, 81, 651];

// console.log(arr[0]);
// console.log(arr[3]);

// const [first, second, third] = arr;

// console.log(first);
// console.log(third);

//obj

// let obj = {
//   name: "Jhon",
//   age: 25,
//   city: "Bangalore",
//   address: {
//     pin: 512455,
//   },
//   color: "red",
//   occupation: "Developer",
// };

// console.log(obj.name);
// // console.log(obj.city);

// const { name, age, city } = obj;

// console.log("after destructring", name);
// console.log("after destructring", city);

// async function fetchData() {
//   try {
//     const response = await fetch("https://dummyjson.com/carts");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// fetchData();

// console.log("Start");

// setTimeout(() => {
//   console.log("time");
// }, 1000);

// console.log("end");

// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise Resolved");
// });

// console.log("End");

// 1.
//start
//timeout
//promise
//end

// 2.
//promise
//settimeout
//start
//end

// **********************Closures*******************
// function outer() {
//   let a = 10;
//   function inner() {
//     let b = 10;
//     const sum = a + b;
//     console.log(sum);
//   }
//   return inner;
// }
// const fun = outer();
// fun();

// ***********this keyword*****************
// "use strict";
// console.log(this);
// // console.log(window);

// function fun() {
//   console.log(this);
// }
// fun();

// let obj = {
//   name: "dfgh",
//   age: 20,
//   city: "Bangalore",
//   fun: function () {
//     console.log(this.age);
//   },
// };

// console.log(obj.age);

// *******arrow function**********

// let a = 40;
// function outer() {
//   let a = 10;
//   const newFn = () => {
//     console.log(this.a);
//   };
//   newFn();
// }
// outer();

// **********************************

// let c = 30;
// function outer() {
//   let a = 10;
//   function inner() {
//     let b = 20;
//     console.log("inner fun", a); //?
//     console.log(b);
//     console.log(c);
//   }
//   return inner;
// }
// const store = outer();
// store();

// function outer() {
//   let count = 1;
//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }

// const store = outer();
// store();
// store();
// store();
// store();
// store();
// store();

// *************This in JS***************

// alert("Hello");
// confirm("submit form?");
// prompt("enter your name");
// "use strict";
// console.log(this);

// function fun() {
//   console.log("inside the fun", this);
// }
// fun();

// let obj = {
//   name: "John",
//   age: 20,
//   city: "Bangalore",
//   fun: function () {
//     console.log("inside the object", this);
//     console.log(this.city);
//   },
// };

// obj.fun();

// let name = "John";
// const obj = {
//   name: "Alice",
//   greet: () => {
//     console.log(this.name);
//   },
// };
// obj.greet(); // undefined (because arrow takes this from global scope)

// const obj = {
//   name: "Alice",
//   greet: function () {
//     const arrow = () => console.log(this.name);
//     arrow();
//   },
// };
// obj.greet();

// const obj = {
//   name: "Alice",
//   normalFn: function () {
//     console.log("this is from normal fun", this.name);
//   },
//   arrowFn: () => {
//     console.log("this is from arrow fun", this.name);
//   },
// };

// obj.arrowFn();
// obj.normalFn();
