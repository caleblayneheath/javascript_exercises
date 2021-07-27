function findFibonacciIndexByLength(length) {
  if (length === 1) return 1;

  let count = 6;
  let firstNumber = 5;
  let secondNumber = 8;

  while (true) {
    secondNumber += firstNumber;
    firstNumber = secondNumber - firstNumber;
    count += 1;
    if (String(secondNumber).length >= length) return count;
  }

}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
