/*
input: word string, word means no spaces and only letters, we don't care about case
output: true or false if the word can be made using the blocks

rules:
there are a collection of blocks. each block has two letters.

a block may only be used once. further, each letter may only be used once. so a block may be used once and only for one of the letters.
if a word requires a letter on a block that has already been used, it is invalid.

the blocks are these
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M


ideas for storing the blocks
  array of arrays, each with two letters
  array of two letter strings, each element is a block (like this since string manipulation)
    this way requires removing a block from consideration, such as by remove a block from the collection or maintaining a way to check blocks against some external variabvle
  object where keys are two letter strings and value is a used/not used value
  
clean input and upcase it  
create array of blocks, each element a two letter string
split word into array of chars
for each char
  check each block
  if char in block
    splice block from array
    continue
  return false
return true
*/
function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA',
                  'GT', 'RE', 'FS', 'JW', 'HU',
                  'VI', 'LY', 'ZM'];
  
  let usedBlocks = [];
  let chars = word.toUpperCase().split('');
  for (let index = 0; index < chars.length; index += 1) {
    let char = chars[index]; 
    let block = blocks.filter(block => block.match(char))[0];
    
    if (usedBlocks.includes(block)) return false;
    usedBlocks.push(block);
  }
  
  return true;
}



console.log(isBlockWord('BaTcH'));      // true
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
