function sum(integer) {
  return String(integer)
    .split('')
    .map(digit => Number(digit))
    .reduce((sum, digit) => sum += digit);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
