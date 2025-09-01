// Array destructuring
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [one, two, , , five, ...rest] = arr;
console.log(one, two, five, rest);

// Object destructuring
const person = {
  name: "Utsho",
  age: 25,
  roll: 29,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
const {
  name,
  age:myAge,
  address: { city, country },
} = person;

// Traditional approach**
// const name = person.name;
// const age = person.age;
// const city = person.address.city;
// const country = person.address.country;

console.log(name, myAge, city, country);
