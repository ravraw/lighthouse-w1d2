// const myArgs = process.argv.slice(2);
// for (let i = 0; i < myArgs.length; i++) {
//   let currentArg = myArgs[i];
//   let reverseArg = "";

//   for (let j = currentArg.length - 1; j >= 0; j--) {
//     reverseArg += currentArg[j];
//   }
//   console.log(reverseArg);
// }
//
//

const myArgs = process.argv.slice(2);

// reduce the argument array to a string
let str = myArgs.reduce((acc, cur) => acc + cur + "#", "");
console.log(str);

let reversedStr = "";
// reverse the reduce string
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);

// console.log out the reversed arguments
let reversedSubstring = "";
for (let i = str.length - 1; i >= 0; i--) {
  if (reversedStr[i] !== "#") {
    reversedSubstring = reversedStr[i] + reversedSubstring;
  } else {
    console.log(reversedSubstring);
    reversedSubstring = "";
  }
}
