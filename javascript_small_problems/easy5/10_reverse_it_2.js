/*
Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

input: string with one or more words(letters only) separated by a single space each
output: new string where all words with length >= 5 have reversed letters

split string into array of words using ' '
map array of words
  if words.length >= 5
    split word into array of chars, reverse, and join
  else
    word
join string with ' ' and return

*/

function reverseWords(string) {
  let words = string.split(' ');
  return words.map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
