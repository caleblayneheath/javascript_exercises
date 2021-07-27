/*
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

input: string
output: new string where every character is repeated twice

split string into array of chars
map char into being double char
join array and return
*/

function repeater(string, repetitions = 2) {
  return string.split('').map(elem => elem.repeat(repetitions)).join('');  
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
