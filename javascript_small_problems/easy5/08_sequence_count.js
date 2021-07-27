/*
Sequence Count
Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

input: two integers, a count and a starting number
  the count will always be greater than or equal to 0
  the starting number is the number the sequence starts at
output: an array containing a sequence of count number of multiples of the starting number, starting with the multiple of 1

the count arg should equal the number of elements in the result array
if count is 0, return an empty array

create empty result array
for 1 through count
  push iterationNumber * startingNumber to result
return result
*/

function sequence(count, start) {
  let result = [];
  for (let iter = 1; iter <= count; iter += 1) {
    result.push(iter * start); 
  }
  
  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
