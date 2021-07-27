/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

input: array (ideally)
output:
  - if not array, return undefined
  - if empty array (no elements?), return []
  - if non-empty array, return a new array with first element placed at the rear of the array (an array of length 1 is effectively the same)

check if input an array (use Array.isArray()), if no, return undefined
check if array empty, and return [] if so
make a copy of input array
remove front element of copy using shift
push former front element to rear of copy with push
return copy array

*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined; 
  
  if (array.length === 0) return [];
  
//   let result = [...array];
//   result.push(result.shift());
  
//   return result;
  
  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

