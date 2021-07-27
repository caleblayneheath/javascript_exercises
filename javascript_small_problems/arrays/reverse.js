function reverse(inputForReversal) {
  let arrayBool = Array.isArray(inputForReversal);

  let result;
  if (arrayBool) {
    result = [];
  } else {
    result = '';
  }

  for (let index = inputForReversal.length - 1; index >= 0; index -= 1) {
    if (arrayBool) {
      result.push(inputForReversal[index]);
    } else {
      result += String(inputForReversal[index]);
    }
  }

  return result;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

let array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
