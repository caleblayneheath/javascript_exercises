/*
Write a function that takes one argument, an array containing integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

input: array of positive integers, never empty
output: average of all elements in the array, founded down to nearest integer

reduce array to get sum
divide by array.length
return floored result

*/

function average(array) {
  return Math.floor(array.reduce((accum, elem) => accum += elem) / array.length); 
}

console.log(average([1, 2, 4])); // 2
console.log(average([1, 2, 8])); // 3

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
