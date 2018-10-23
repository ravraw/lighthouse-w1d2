const myArgs = process.argv.slice(2);
let result = "";
let prefix = "ay ";

for (let i = 0; i < myArgs.length; i++) {
  let currentArg = myArgs[i];
  let changedArg = `${currentArg.slice(1)}${currentArg[0]}ay `;
  result += changedArg;
}

console.log(result);
