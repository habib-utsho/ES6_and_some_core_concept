// 2 types data type
// 1. Primitive = string, number, boolean, undefined, null, Symbol, BigInt
// 2. Non primitive or referential= Object, Array, Function, Date

// Primitive example
let age = 18;
let age2 = age;
age2 = 30;
// console.log("age2-> ", age2, "age-> ", age);

// Non primitive or Referential
const obj = {
  a: 10,
  b: 20,
};
// const obj2 = obj; //assigned reference or location
const obj2 = { ...obj }; // create independent obj using spread operator
obj2.a = 50;

console.log("obj2-> ", obj2);
console.log("obj-> ", obj);
