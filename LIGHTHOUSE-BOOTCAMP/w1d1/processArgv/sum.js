const myArgs = process.argv.slice(2);
const num1 = +myArgs[0];
const num2 = +myArgs[1];

// Adds 2 numbers
const add = () => {
  console.log(num1 + num2);
};

// Add all given numbers
const addAll = () => {
  console.log(myArgs.reduce((acc, cur) => +acc + +cur, 0));
};

add();
addAll();
