/*
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

input: string
output: string where every consonant is repeated twice, but all other characters are unchanged

define regex of consonants
split string into chars
map array of chars
  if consonant, return char + char
  else return char
join array of chars and return

*/

function doubleConsonants(string) {
  let isConsonant = (char) => {
    let regex = /[bcdfghjklmnpqrstvwxyz]/i;
    return char.match(regex);
  };
  
  return string
    .split('')
    .map(char => isConsonant(char) ? char + char : char)
    .join('');
}

console.log(doubleConsonants('aeiouAEIOUx'));      // 'aeiouAEIOUxx'
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
