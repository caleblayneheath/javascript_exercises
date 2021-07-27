/*
input: string
output: true /false

rules:
palindrome is a string that reads forwards and backwards
should be case insensitive and ignore non-alphanumeric characters

take string and downcase it, then replace every nonletter and nondigit char
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  return isPalindrome(string.toLowerCase().replace(/[^a-z0-9]/gi, ''));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case matters)
console.log(isRealPalindrome("madam i'm adam"));      // true (all characters matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
