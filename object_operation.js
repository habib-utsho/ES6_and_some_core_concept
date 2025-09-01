let name = "Utsho";
let age = 29;

let person = {
  name,
  age,
  roll: 29,
  getInfo() {
    console.log(`My name is ${person.name}`);
  },
};
// console.log(person);
// person.getInfo();

// object property access by Dot notation, bracket notation,destructuring
// Dot notation
// console.log(person.name);

// Bracket notation
const test = "name";
// console.log(person["name"]);
// console.log(person[test]);

// Keys - get keys as array
const keys = Object.keys(person);
// console.log(keys);

// values - get values as array
const values = Object.values(person);
// console.log(values);

// Entries - get key value pair as array of array
const entries = Object.entries(person);
// console.log(entries);

// Loop iterate - two ways ***
// using keys
for (const key of keys) {
  //   console.log(key, ": ", person[key]);
}
// for in
for (const key in person) {
  //   console.log(key, ": ", person[key]);
}

// Seal, freeze and delete ****
const obj2 = {
  country: "Bangladesh",
  color: "Green",
};

// Delete
// delete obj2.color;

// freeze
// Object.freeze(obj2); // Prevent insert, delete and update
// delete obj2.color;
// obj2.country = "Uganda";
// obj2.test = "test";

// Seal
Object.seal(obj2); // Prevent insert, delete
delete obj2.color;
obj2.country = "Uganda";
obj2.test = "test";

console.log(obj2);
