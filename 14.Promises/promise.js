// function orderPizza(callback) {
//   console.log("Ordering pizza...");

//   setTimeout(() => {
//     const pizzaReady = true;

//     if (pizzaReady) {
//       callback(null, " Pizza is delivered!");
//     } else {
//       callback(" Failed to deliver pizza.", null);
//     }
//   }, 2000);
// }

// orderPizza((error, successMessage) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(successMessage);
//   }
// });

// What Are Promises?
// A Promise is a JavaScript object that represents the eventual result (or failure) of an asynchronous operation.

// 2. Why Do We Need Promises?
// JavaScript is single-threaded, and asynchronous tasks (like API calls, file reading, setTimeouts) must be handled non-blockingly.

//  Without Promises:
// You’d be stuck with callback hell (nested callbacks).
// Code becomes hard to read, debug, and maintain.

//  With Promises:
// Cleaner syntax
// Error handling is easier
// Chaining multiple async tasks becomes simple

// A Promise has three states:

//  `pending`  :  The operation is ongoing
//  `fulfilled`:  The operation completed successfully
//  `rejected` :  The operation failed

// promise Syntax

// new Promise((resolve,reject)=>{async code});

// const promise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve(" Success");
//   } else {
//     reject(" Error");
//   }
// });

// Consuming a Promise

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log(" Promise is settled (either success or fail)");
//   });

// //Using promises

// function orderPizzaPromise() {
//   console.log("Ordering pizza...");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pizzaReady = true;

//       if (pizzaReady) {
//         resolve(" Pizza is delivered!");
//       } else {
//         reject(" Failed to deliver pizza.");
//       }
//     }, 2000);
//   });
// }

// orderPizzaPromise()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // **************************************************
// //drawback of pomises is .then Chaining

// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User data fetched");
//     }, 1000);
//   });
// };

// fetchUser()
//   .then((res) => {
//     console.log(res);
//     return "Processing user data";
//   })
//   .then((message) => {
//     console.log(message);
//     return "User data saved";
//   })
//   .then((finalMsg) => {
//     console.log(finalMsg);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

//   ****************************************************

// 8. Promise Methods

//  Method                    Description

//  `Promise.resolve(val)`    Returns a resolved promise with value `val`
//  `Promise.reject(err)`     Returns a rejected promise with error `err`
//  `Promise.all([])`         Waits for all promises to resolve, or any to reject
//  `Promise.race([])`        Resolves/rejects as soon as **any one** settles
//  `Promise.allSettled([])`  Returns the result of all promises (fulfilled or rejected)
//  `Promise.any([])`         Returns first fulfilled promise, ignores rejections

// Async using callback
// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("fetch the data");
//     callback();
//   }, 1000);
// }

// function convertData(callback) {
//   setTimeout(() => {
//     console.log("data converted");
//     callback();
//   }, 1000);
// }

// function displayData() {
//   setTimeout(() => {
//     console.log("Display the data");
//   }, 1000);
// }

// fetchData(() => {
//   convertData(() => {
//     displayData();
//   });
// });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataFetched = true;
//       if (dataFetched) {
//         resolve("fetch the data");
//       } else reject("fetching error");
//     }, 1000);
//   });
// }

// function convertData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let dataConverted = true;
//       if (dataConverted) {
//         resolve("data converted");
//       } else reject("deta conversion failed");
//     }, 1000);
//   });
// }

// function displayData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let display = true;
//       if (display) {
//         resolve("Display the data");
//       } else reject("display failed");
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
//     return console.log("all the tasks are completed");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

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
//       let display = true;
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
//   });

// async function fetchData() {
//   try {
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();
