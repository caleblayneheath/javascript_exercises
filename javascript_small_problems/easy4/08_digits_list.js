/*

Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

input: positive integer ( 0 or greater)
output: array containing the digits of the input

Stringify the input, split into chars, map to number, return

*/

function digitList(number) {
  return String(number).split('').map(elem => Number(elem));  
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
