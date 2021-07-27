/*
Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

input: array of integers
output: string which is the result of multipling all integers together, dividing by the number of array elements, and rounding number to three decimal places

reduce all elements using multiplication
divide product by array length
round to three places
  multiply by 1000, round, divide by 1000
show precision out to three decimal places
return string version
*/

function showMultiplicativeAverage(array) {
  let result = array.reduce((accum, elem) => accum *= elem) / array.length; 
  return result.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
