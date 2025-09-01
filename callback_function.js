const greet = (name, greetingsMsg, cb) => {
  console.log(`Hi, ${name}`);
  cb(greetingsMsg);
};

const sayGreetings = (greetMessage) => {
  console.log(greetMessage);
};

// Here sayGreetings is callback function
greet("Utsho", "Good night", sayGreetings);
