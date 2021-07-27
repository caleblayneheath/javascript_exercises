/*

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

input: two arrays, whose elements are number, both have same length
output: new array for each element is the product of the elements sharing the same index from the input arrays


map through first array
transform element into element times other element at index
return mapped array

*/

function multiplyList(arr1, arr2) {
  return arr1.map((elem, index) => elem * arr2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
