// var hoisted . (Bad practice)
// let and const hoisted but in temporal dead zone.

var name = "Utsho";

let age = 25;
age = 30; //reassign
console.log(age);

const roll = 29;
console.log(roll);

// Scope (গন্ডি) global scope, block scope, and function or local scope
// var maintain only function scope, but not block scope or global scope
// let and const maintain all scope
{
  var test = "Demo";
  let test2 = "Demo2";
}

console.log(test);
// console.log(test2);

// Function scope/ local scope
function myFunc() {
  var test3 = "Test 3";
  let test4 = "Test 4";
}
myFunc();
// console.log(test4);

// Hoisting
console.log(test5);
var test5 = "test 5";

// console.log(test6);
let test6 = "test 6";
