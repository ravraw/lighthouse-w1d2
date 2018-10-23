const input = process.argv[2];

const checkChar = char => {
  switch (char) {
    case "a":
      return 4;
    case "e":
      return 3;
    case "o":
      return 0;
    case "l":
      return 1;
    default:
      return char;
  }
};

const obfuscator = (password, cb) => {
  let hash = "";
  for (let char of password) {
    hash += cb(char);
  }
  return hash;
};

console.log(obfuscator(input, checkChar));

// const obfuscator = password => {
//   let hash = "";
//   for (let char of password) {
//     switch (char) {
//       case "a":
//         hash += 4;
//         break;
//       case "e":
//         hash += 3;
//         break;
//       case "o":
//         hash += 0;
//         break;
//       case "l":
//         hash += 1;
//         break;
//       default:
//         hash += char;
//         break;
//     }
//   }
//   return hash;
// };
