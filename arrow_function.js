// Traditional function is hoisted, but arrow function is not

console.log("Multiplication -> ", multiplication(5, 10));
function multiplication(a, b) {
  return a * b;
}

// Arrow function
const sum = (a, b) => a + b; //Implicit return
const sqrt = (a) => a * a;
console.log(sum(5, 5));

console.log(sqrt(5));



// Optional
function myFuncNormal() {
  console.log(this);
}
// myFuncNormal();

const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
