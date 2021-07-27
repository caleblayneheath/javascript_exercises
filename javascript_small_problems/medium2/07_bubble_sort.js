/*
A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

we can break after any iteration in which there were no swaps
we must mutate the input array

create a variable to track if there were swaps (let noSwap = true)
loop through the array until no swaps are done (while loop)
for all elements, start at index = 1 and go to index = length - 1
  look at elements left[index - 1] and current[index]
    if left > current
      [left, current] = [current, left]
      noSwap = false
  
    if (noSwap) break;

*/

function bubbleSort(array) {
  let iteration = 1;
  while(true) {
    let noSwap = true;
    for (let idx = 0; idx <= array.length - iteration; idx += 1) {
      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        noSwap = false;
      }
    }
    
    iteration += 1;
    if (noSwap) break;
  }
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
