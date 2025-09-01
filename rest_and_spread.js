// Rest and spread operator

// Rest operator
const findMax = (...rest) => {
  //   console.log(rest);
  const maxNumber = Math.max(...rest); //spread
  return maxNumber;
};
console.log(findMax(10, 20, 30, 40, 50, 100, 500, 1000, 50000));

// Spread operator
// Array
const arr = [10, 20, 30, 60];
// console.log(...arr); //spread
// console.log(Math.max(...arr)); // spread

// Object
const obj = {
  name: "utsho",
  age: 25,
};
const obj2 = { ...obj }; //copy independently
obj2.age = 30;

console.log("obj2 ->", obj2);
console.log("obj ->", obj);
