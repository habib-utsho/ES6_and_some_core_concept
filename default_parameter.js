const myFunc = (name = "Utsho", age = 18) => {
  console.log(`My name is ${name}. My age is ${age}`);
  return age + 5;
};

console.log(myFunc("Rahim", 22));
