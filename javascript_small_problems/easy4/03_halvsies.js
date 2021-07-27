/*
Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

input: an array
output: array of two arrays with the elements from the first half in the first array and the elements from the second half of the input in the second array, middle element goes in first array


create arr1 and arr2 to hold the first and second halves of the input
iterate through input array
use indices and lengths to decide if element is in first or second half
    [1, 2, 3, 4, 5]  
      0  1  2  3  4 length = 5
 if index < (length / 2) put in first half
 else put in second half
 
return [arr1, arr2]
*/

function halvsies(array) {
//   let arr1 = [];
//   let arr2 = [];
  
//   array.forEach((elem, index) => {
//     index < (array.length / 2) ? arr1.push(elem) : arr2.push(elem);
//   });
  
  let half = Math.ceil(array.length / 2);
  let arr1 = array.slice(0, half);
  let arr2 = array.slice(half);
  return [arr1, arr2];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
