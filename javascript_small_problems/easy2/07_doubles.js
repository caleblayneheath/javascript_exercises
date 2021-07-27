function isDoubleNumber(number) {
  let numString = String(number);
  let strlen = numString.length;

  if (strlen % 2 === 1) return false;

  for (let index = 0; index < (strlen / 2); index += 1) {
    if (numString[index] !== numString[index + (strlen / 2)]) {
      return false;
    }
  }

  return true;
}

function twice(number) {
  if (isDoubleNumber(number)) return number;

  return number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
