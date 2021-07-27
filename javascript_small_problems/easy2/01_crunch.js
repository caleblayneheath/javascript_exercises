function crunch(string) {
  let tempString = '';

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];
    let nextChar = string[index + 1];

    if (currentChar === nextChar) continue;
    tempString += currentChar;
  }

  return tempString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
