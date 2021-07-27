function shortLongShort(firstString, secondString) {
  if (firstString.length > secondString.length) {
    return secondString + firstString + secondString;
  } else {
    return firstString + secondString + firstString;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
