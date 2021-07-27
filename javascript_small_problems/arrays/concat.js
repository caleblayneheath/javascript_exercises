function concat(arr, ...args) {
  let result = arr.slice()
  for (let index = 0; index < args.length; index += 1) {
    if (!Array.isArray(args[index])) args[index] = [args[index]];

    for (let subIndex = 0; subIndex < args[index].length; subIndex += 1) {
      result.push(args[index][subIndex]);  
    }

  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
