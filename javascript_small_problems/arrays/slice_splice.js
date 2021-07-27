function slice(array, begin, end = array.length) {
  if (begin > array.length) begin = array.length;
  if (end > array.length ) end = array.length;

  let result = [];
  for (let index = begin; index < end; index += 1) {
    result.push(array[index]);
  }

  return result;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

let arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...elements) {
  if (!elements) elements = [];
  if (start > array.length) start = array.length;

  let results = [];
  let holder = slice(array, start);

  if (deleteCount > holder.length) deleteCount = holder.length;

  array.length -= holder.length;
  for (let index = 0; index < deleteCount; index += 1) {
    results.push(holder.shift());
  }

  for (let index = 0; index < elements.length; index += 1) {
    array[index + start] = elements[index];
  }

  while (holder.length > 0) {
    array.push(holder.shift());
  }

  return results;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

let arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

let arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

let arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

let arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
