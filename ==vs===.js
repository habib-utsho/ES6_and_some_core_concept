// == and ===
let num = 5;
let num2 = "5";
// == is loose equality -> 1. Only check value, 2. Behind the scene type coercion
console.log("using double equal-> ", num == num2);

// === is string equality -> 1. Check value and data type both
console.log("using Triple equal-> ", num === num2);
