function multisum(number) {
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    if ((index % 3 === 0) || (index % 5 === 0)) {
      sum += index;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
