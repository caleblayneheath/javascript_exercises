'use strict';

function staggeredCase(string) {
// set bool var makeUpper = true
// iterate through string to build new string
// if char is a letter
//   if makeUpper true, 
//     then uppercase it
//     set makeUpper = false
//   if makeUpper false
//      lowercase char
//      set makeUpper = true;
//   add char to result
// return result
  let makeUpper = true;

  return string.split('').map(char => {
    if ((/[a-z]/i).test(char)) {
      if (makeUpper) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }

      makeUpper = !makeUpper;
    }

    return char;
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
