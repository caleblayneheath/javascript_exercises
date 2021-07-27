function stringy(integer, firstChar = '1') {
  let tempString = '';

  for (let index = 0; index < integer; index += 1) {
    tempString += firstChar;
    firstChar === '1' ? firstChar = '0' : firstChar = '1';
  }

  return tempString;
}

console.log(stringy(6, '0'));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4, '0'));    // "1010"
console.log(stringy(7));    // "1010101"
