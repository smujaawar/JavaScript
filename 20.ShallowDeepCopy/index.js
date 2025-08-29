//1.Assign

// const obj = {
//   name: "John",
//   address: {
//     city: "Bangalore",
//   },
// };

// const obj2 = obj; //normal copy - reference is copied not the value

// obj2.name = "Mary";
// obj2.address.city = "Delhi";
// console.log("obj", obj);
// console.log("obj2", obj2);

//2.Shallow copy

// const obj = {
//   name: "John", //1st level is copied
//   address: {
//     city: "Bangalore", //nested is referenced
//   },
// };

// const obj2 = { ...obj }; //shallow copy

// obj2.name = "Mary";

// console.log("obj", obj.name);
// console.log("obj2", obj2.name);

// obj2.address.city = "Delhi";
// console.log("obj", obj.address.city); //
// console.log("obj2", obj2.address.city); //

//2.Deepcopy

const obj = {
  name: "John", //1st level is copied
  address: {
    city: "Bangalore", //nested is referenced
  },
};

// const obj2 = structuredClone(obj);
// const obj2 = JSON.parse(JSON.stringify(obj));

obj2.name = "Mary";

// console.log("obj", obj.name); //John
// console.log("obj2", obj2.name); //Mary

obj2.address.city = "Delhi";
console.log("obj", obj.address.city); //Bangalore
console.log("obj2", obj2.address.city); //Delhi
