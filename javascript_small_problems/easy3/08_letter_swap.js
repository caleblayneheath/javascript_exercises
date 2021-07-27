/*
input: string of words separated by spaces
output: new string where the first and last letters of every word are swapped

every word contains at least one letter/char
every string contains at least one word
each string has nothing but words and spaces (with no leading, trailing, or repeated spaces)

swap should do nothing if a word is only one character

split string into array of words
map array, for each word
  if word.length > 1
    swap letters
      get first letter and last letter with slice
      get middle with slice (1, -1)
      a.slice(-1) + a.slice(1, -1) + a.slice(0,1)
    
  else
    word
join array with spaces and return

*/

function swap(string) {
  return string.split(' ').map(word => {
    if (word.length > 1) {
      return word.slice(-1) + word.slice(1, -1) + word.slice(0,1);
    } else {
      return word;
    }
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
