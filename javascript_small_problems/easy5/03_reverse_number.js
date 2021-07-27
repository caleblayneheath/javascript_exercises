/*
Reverse Number
Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

input: positive, definite integer
output: the integer you'd get if you reversed the digits order, dropping heading zeros


*/

function reverseNumber(number) {
  let digits = String(number).split('').reverse('').join('');
  return Number.parseInt(digits, 10);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
