/*
input: string
output: true /false

rules:
palindrome is a string that reads forwards and backwards
case and all characters matter.
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
