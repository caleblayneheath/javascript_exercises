/*
Counting Up
Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

input: integer number
output: an array of all numbers from 1 to the argument, inclusive

create empty result array
use for loop from 1 to arg
add each loop number to result array
return result array

*/

function sequence(number) {
  let result = [];
  
  for (let iteration = 1; iteration <= number; iteration += 1) {
    result.push(iteration);
  }
  
  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
console.log(sequence(0));    // []
