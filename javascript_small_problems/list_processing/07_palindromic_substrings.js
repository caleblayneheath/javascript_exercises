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

function palindromes(string) {
//   let isPalindrome = function (string) {
//   // traverse front and back of string at the same time
//   // stop traversing at the middle of the string.
//   // return false if front and back don't agree, else true
//     if (string.length <= 1) return false;

//     for (let index = 0; index < string.length; index += 1) {
//       if (string[index] !== string[string.length - 1 -index]) {
//         return false;
//       }
//     }

//     return true;
//   };

  let isPalindrome = function(word) {
    return word.length > 1 && word === word.split('').reverse().join('');
  }

  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
