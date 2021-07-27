/*
input: an array of numbers
output: an array of numbers

return an array where each element is equal to the sum of all previous elements.
set accumulator to zero
create empty results array
//for an index from 0 to the end of the array
  add current element to accumulator
  push sum to results
  
  return results
*/

function runningTotal(array) {
  let sum = 0;
  return array.map(element => sum += element);  
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
