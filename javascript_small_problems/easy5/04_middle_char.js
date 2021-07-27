/*
Get the Middle Character
Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

input: non-empty string
output: return middle character of the string, as a new string

the middle character for a string of odd length is one character
the middle character for a string of even length is the middle two chars

if length odd, middleIndex = (length) - 1 / 2
a b c d e
0 1 2 3 4 length = 5

if length even, middleIndices = (length - 1) / 2  floored and ceilinged
a b c d e f
0 1 2 3 4 5 length = 6

a b
0 1  length = 2

determine if string length is odd or even
if odd
  return string[middleIndex = (length) - 1 / 2]
else
  return middleIndices = (length - 1) / 2  floored and ceilinged
*/

function centerOf(string) {
  let middle = Math.floor((string.length - 1) / 2);
  
  if (string.length % 2 === 1) {
    return string[middle];
  } else {
    return string[middle] + string[middle + 1];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
