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

// function add(a, b) {
//   let sum = a + b;
//   return sum;
// }

// const add1 = add(5, 5);
// const add2 = add(15, 15);

// console.log(add1);
// console.log(add2);

// console.log(window);

// ******************Hoisting***********************

// debugger;

// console.log(a); //undefined
// console.log(b); // Uncaught ReferenceError
// console.log(c); //Uncaught ReferenceError

// var a = 10;
// var b = 50;
// let bb = 20;
// let str = "dfghj";
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// function hello() {
//   console.log("Hello World Function1");
// }
// hello();

// const fun2 = () => {
//   console.log("Hello World Function2");
// };

// fun2();

// {
//   let a = 10;
//   var b = 20;
//   const c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a);
// console.log(b);

// function abc() {
//   let a = 10;
//   var b = 20;
//   const c = 30;
// }
// abc();

// console.log(a);
// console.log(b);
// console.log(c);

//mutable and immutable
//value and  reference

// let a = 20;
// let b = a; //copy b = 20

// console.log(a); //20
// console.log(b); //20

// b = 30; //chaging b to 30

// console.log(a); //20
// console.log(b); //30

//Non primitive (Array)
// let arr1 = [10, 20, 30];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// arr2.push(40);
// console.log(arr1);
// console.log(arr2);

// const arr = () => {
//   console.log("Hello");
// };
// arr();

// const fun = () => {
//   console.log("arrow fun");
// };
// fun();

//named function
function add() {
  console.log("named fun");
}
add();

//anonymous function
const anonymous = function () {
  console.log("Anonymos fun");
};
anonymous();

//arrow fun
const arrow = () => {
  console.log("Arrow fun");
};
arrow();

//IIFE
(function () {
  console.log("IIFE");
})();

//function expression
const fun = function () {
  console.log("");
};
fun();

//*************callback fun*****************
function greet(person, callback) {
  console.log(`Hi ${person}`);
  callback();
}

function fun1() {
  console.log("Good Morning");
}

greet("John", fun1);

//**************synchronous callback*************

// function addd(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// addd(2, 3, (result) => console.log(`result is ${result}`));

//***********async callback***********

// console.log("start");

// setTimeout(() => {
//   console.log("Timeout executed");
// }, 1000);

// console.log("End");

//****************callback hell example***********

// function getData(callback) {
//   setTimeout(() => {
//     console.log("Getting Data");
//     callback();
//   }, 1000);
// }

// function processData(callback) {
//   setTimeout(() => {
//     console.log("Processing Data");
//     callback();
//   }, 1000);
// }

// function storeData(callback) {
//   setTimeout(() => {
//     console.log("Storing Data");
//     callback();
//   }, 1000);
// }

// getData(() => {
//   processData(() => {
//     storeData(() => {
//       console.log("finished");
//     });
//   });
// });

// ***********using Promise***********

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Fetched");
      const success = true; // simulate success/failure
      if (success) {
        resolve();
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

function processData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Processed");
      const success = true;
      if (success) {
        resolve();
      } else {
        reject("Error processing data");
      }
    }, 1000);
  });
}

function storeData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Stored");
      const success = true;
      if (success) {
        resolve();
      } else {
        reject("Error storing data");
      }
    }, 1000);
  });
}

function allDone() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Process completed");
      const success = true;
      if (success) {
        resolve();
      } else {
        reject("Error in final step");
      }
    }, 1000);
  });
}

fetchData()
  .then(() => processData())
  .then(() => storeData())
  .then(() => allDone())
  .catch((err) => console.log(err))
  .finally(() => console.log("All done"));
