const arr = [12, 13, 5, 10, 20, 30, 40, 50, 60, 70];
const phones = [
  {
    name: "iPhone 14 pro",
    price: 90000,
  },
  {
    name: "iPhone 14 pro",
    price: 92000,
  },
  {
    name: "Google pixel 10 pro",
    price: 95000,
  },
  {
    name: "Motorola G85",
    price: 24000,
  },
  {
    name: "Samsung S25 ultra",
    price: 112500,
  },
  {
    name: "iPhone 16 pro",
    price: 135500,
  },
];

// For of - just loop iterate
for (const item of arr) {
  //   console.log(item);
}

// Foreach - just loop iterate
// arr.forEach((item) => console.log(item));

// Map method -  update element of an array
const updatedArr = arr.map((item) => item + 5);
// console.log(updatedArr);

// Filter method - Filter multiple elements
const adultStudents = arr.filter((item) => item >= 18);
const overpricePhones = phones.filter((item) => item.price > 100000);
// console.log(overpricePhones);
// console.log(adultStudents);

// Find method - find a single element
const findThirty = arr.find((item) => item == 20);
// console.log(findThirty);

const find16Pro = phones.find((element) => element.name == "iPhone 14 pro");
// console.log(find16Pro);

// Reduce
// const arr = [12, 13, 5, 10, 20, 30, 40, 50, 60, 70];
const summation = arr.reduce((accumulator, current) => {
  return accumulator + current; //  accumulator = 40
}, 0);
console.log(summation);
