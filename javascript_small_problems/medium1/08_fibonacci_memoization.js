/*
Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.
*/

const FIB = {};


function fibonacci(n) {
  if (Object.keys(FIB).includes(n)) return FIB[n];
  
  FIB[n] = n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
    
  return FIB[n];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(25));      // 6765
console.log(fibonacci(30));      // 6765
console.log(fibonacci(35));      // 6765

// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050
