function leadingSubstrings(string) {
  return string.split('').map((_, index) => {
    return string.slice(0, index + 1);
  });
}

function substrings(string) {
  return string
  .split('')
  .map((_, index) => leadingSubstrings(string.slice(index)))
  .flat();
}

console.log(substrings('abcde'));

// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
