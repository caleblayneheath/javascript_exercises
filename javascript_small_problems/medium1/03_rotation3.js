/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

input: an integer
output: maximum rotations of that integer

rotation of digits - select contigusous digits starting with the rightmost digit, move each selected digit to the left, take the leftmost digit and make it the rightmost digit

max rotations
perform a rotation with all digits from rightmost digit to leftmost digit
take result of rotation and repeat, selecting all digits from rightmost digit to second from leftmost digit (if avilable)
repeat until all digits have been rotated

set iterations to length of input number in string form
counting down from iterations to 1
  result = rotateRightmostDigits(result, iterationNumber);
  
return result
*/

function maxRotation(number) {
  let result = number;
  for (let iteration = String(number).length; iteration >= 1; iteration -= 1) {
    result = rotateRightmostDigits(result, iteration);
  }
  
  return result;
}

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined; 
  
  if (array.length === 0) return [];
  
  return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(number, n) {
  let digits = String(number).split('');
  
  if (digits.length - n < 0) n = digits.length;
  
  let rotatingDigits = digits.splice(digits.length - n);
  
  digits = digits.concat(rotateArray(rotatingDigits));
  
  return Number.parseInt(digits.join(''), 10);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
