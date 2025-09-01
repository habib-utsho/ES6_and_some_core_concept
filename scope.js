// Scope -> গন্ডি অথবা সীমানা

// 3 types of scope -> 1. Global scope,  2. Block Scope, 3. Function or local scope

// Global scope
let test = "test";
if (true) {
  console.log(test);
}

// Block scope,
// let and const maintains block scope
// var not maintains block scope
{
  let test2 = "test 2";
  const test22 = "test 22";
  var test3 = "test 3";
}
for(let i =0; i< 5; i++){
    let test999 = "test 999"
}
// console.log(test2); //error
// console.log(test22); //error
console.log(test3);
// console.log(test999); //error

// Function scope or Local scope
// var, let and const all are maintaining function scope
const myFunc = () => {
  var test33 = "test 33";
  let test44 = "test 44";
  const test444 = "test 444";

  //   global accidental variable
  test555 = "test 555"; // X bad practice (Not suggested)
};
// console.log(test33);
myFunc();
console.log(test555);
