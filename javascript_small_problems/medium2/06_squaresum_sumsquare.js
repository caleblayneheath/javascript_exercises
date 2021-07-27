/*
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

input: a positive integer greater than 0
output: return value of a computation

first, sum all numbers from 1 to n inclusive, then square the sum
second, square all the numbers from 1 to n inclusive, then sum them
return the difference between the two

create an array containing 1 to n
  create empty array
  for 1 to n
  push number to array

to get squared sum
  reduce array and square result
  
to get sum of squares
  map each number to be its square
  reduce mapped array
*/

function sumSquareDifference(n) {
  let numbers = [];
  for (let i = 1; i <= n; i += 1) { numbers.push(i); }
  
  let squaredSum = numbers.reduce((accum, num) => accum += num) ** 2;
  let sumOfSquares = numbers.reduce((accum, num) => accum += (num ** 2), 0);
  
  return squaredSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(4)); // 70 --> (10**2 - 30) 
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
