/*
Reverse It Part 1
Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

input: string
output: string containing words from input in reverse order

*/

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
