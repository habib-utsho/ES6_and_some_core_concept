// Pass by value (pass by Primitive data type )
const name = "Utsho";
const myFunc = (value) => {
  value = "Habib";
  console.log("inside func: ", value);
};

// myFunc(name);
// console.log("After func call: ", name);

// Pass by reference (pass by non primitive or referential data type )
const obj = {
  name: "Utsho",
  age: 25,
};
const myFunc2 = (param) => {
  param.name = "Habib";
  console.log("inside func: ", param);
};

myFunc2(obj);
console.log("After func call: ", obj);
