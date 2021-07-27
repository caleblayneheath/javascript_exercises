/*
Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

input: two arrays, that aren't emppty, both have same number of elements
output: new array with elements from both input arrays alternating

create results array
get length of either array
iterate through all indices as determined by length
add element at index to resutls for first array, then second
go to next index

return result

*/

function interleave(arr1, arr2) {
  let result = [];
  
  for (let index = 0; index < arr1.length; index += 1) {
    result.push(arr1[index]);   
    result.push(arr2[index]);
  }
  
  return result;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
