/*
Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Example:

input: two arrays
output: new array, which includes all elements of the first array and all elements of the second array that cannot already be found in the first array

create copy of first array (mapping?)
iterate through second array
for each element in second array
  if result array !include elem
    push element to result array
return result array
*/

function union(arr1, arr2) {
  let unique = function(array) {
    let result = [];
    array.forEach(elem => {
      if (!result.includes(elem)) result.push(elem);
    });
    return result
  };
   
  return unique(arr1.concat(arr2));
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 5], [3, 3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union([1, 5], [3, 3, 6, 9])); // [1, 5, 3, 6, 9]
console.log(union([1, 3, 3, 5], [3, 3, 9])); // [1, 3, 5, 9]
console.log(union([], [1, 2, 3])); // [1, 2, 3]
console.log(union([], [1, 2, 2, 3])); // [1, 2, 3]
console.log(union([1, 2, 3], [])); // [1, 2, 3]
console.log(union([], [])); // []
