function myShift(arr) {
  if (arr.length === 0) return undefined;

  let first = arr[0];
  for (let index = 0; index < arr.length - 1; index += 1) {
    arr[index] = arr[index + 1];
  }

  arr.length -= 1;
  return first;
}

function shift(array) {
  let result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}

function myUnshift(arr, ...args) {
  let numberOfArgs = args.length;
  let originalLength = arr.length;
  for (let index = numberOfArgs + originalLength - 1; index >= numberOfArgs; index -= 1) {
    arr[index] = arr[index - numberOfArgs];
  }

  for (let index = 0; index < numberOfArgs; index += 1) {
    arr[index] = args[index];
  }

  return arr.length;
}

function unshift(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array.splice(i , 0, args[i]);
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

let testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
