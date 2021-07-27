/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

input: number(positive integer?), n digits to rotate (1 means no rotation)
output: rotated number (integer?)

what about zeros which end up in front?

start at the rightmost digit (corresponding to n = 1)
if n > 1, traverse left to find corresponding digit
all digits from the right upto this digit will be rotated
the rotation moves each digit one position to the left, with the leftmost digit becoming the rightmost digit

index of rotating part = length of array - n
123, 1
0 1    2   length = 3

123, 2
0   1 2 length = 3

take number, turn into string, split into array of chars
slice off rotating portion and set aside
rotate digits of rotating portion left by 1
combine the two arrays
join the arrays, combine array of chars into string, parse string for int
return int

*/

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

console.log(rotateRightmostDigits(123, 2)); // 132
console.log(rotateRightmostDigits(123, 4)); // 231
console.log(rotateRightmostDigits(102, 3)); // 21 or 21
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

