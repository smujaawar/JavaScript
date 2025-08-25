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

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let fetch = true;

      if (fetch) {
        resolve("fetch the data");
      } else {
        reject("fetch failed");
      }
    }, 1000);
  });
}

function convertData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let convert = true;
      if (convert) {
        resolve("data converted");
      } else {
        reject("conversion failed");
      }
    }, 1000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let display = false;
      if (display) {
        resolve("Display the data");
      } else {
        reject("diplay failed");
      }
    }, 1000);
  });
}

fetchData()
  .then((message) => {
    console.log(message);
    return convertData();
  })
  .then((message) => {
    console.log(message);
    return displayData();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally executed");
  });

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
