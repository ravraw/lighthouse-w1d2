// function loopyLighthouse(range, multiples, words) {
//   for (var i = range[0]; i < range[1] + 1; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     } else if (i % multiples[0] === 0 && i % multiples[1] !== 0) {
//       console.log(words[0]);
//     } else if (i % multiples[0] !== 0 && i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(i);
//     }
//   }
// }

// Helper function
const isFactorial = (num, multiple) => {
  return num % multiple === 0;
};

function loopyLighthouse(range, multiples, words) {
  // Deconstructed to make it more readable
  let [start, end] = range;
  let [word2, word3] = words;
  let word1 = word2 + word3;
  let [number1, number2] = multiples;

  for (var i = start; i < end + 1; i++) {
    if (isFactorial(i, number1) && isFactorial(i, number2)) console.log(word1);
    else if (isFactorial(i, number1)) console.log(word2);
    else if (isFactorial(i, number2)) console.log(word3);
    else console.log(i);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

//console.log(isFactorial(100, 9));
