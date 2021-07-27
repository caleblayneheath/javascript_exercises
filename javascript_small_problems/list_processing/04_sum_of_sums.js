function sumOfSums(array) {
  // for loop way, just realize that the first element must
  // be added to the sum a number of times equal to the length
  // of the array, and each subsequent element is added one time fewer
  
//   let result = 0;
//   for (let index = 0; index < array.length; index += 1) {
//     result += array[index] * (array.length - index);
//   }

//   return result;

  return array.reduce((sum, number, index) => {
    let timesNumberAdded = array.length - index;
    return sum += (number * (timesNumberAdded));
  }, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
