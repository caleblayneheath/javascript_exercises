/*
input: string, integer key
output: encrypted string

rules:
Caesar cipher is a substitution cipher
each letter in plaintext is subbed with letter located a certain number of positions away
the key determines how to shift the letter (if key is 1, a -> b)
if the key would shift a letter past the length of the alphabet, it wraps around (if key is 1, z -> a)
key of zero means no shift
only letters (upper or lower) are encrypted, all other chars are left as is
subbed letters are the same case as the original

take plaintext and split into chars
map array of chars
  if char is letter, perform shift
  else leave alone
join chars and return


ciphering
input: char that is a letter, integer key
output: char that is same case and has been shifted by the key

let newChar = char.upcase // compare the original char with lower upper versions later to pick and preseve case
create array holding all letters, maybe string (something with 0-25 indexing)

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
get index of char from ALPHABET
newChar = ALPHABET[(indexofChar + key) % 26];

if oldchar upcase return new char upcase, else downcase
*/

function caesarEncrypt(plaintext, key) {
  function caesarShift(char, key) {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
    
    let position = ALPHABET.indexOf(char.toUpperCase());
    let shiftedChar = ALPHABET[(position + key) % 26];
    
    if (char === char.toLowerCase()) shiftedChar = shiftedChar.toLowerCase();
    return shiftedChar;
  }
  
  
  return plaintext
    .split('')
    .map(char => {
      return char.match(/[a-z]/i) ? caesarShift(char, key): char;
    })
    .join('');
}

console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 13));


// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('#y', 5));       // "#d"
console.log(caesarEncrypt('a', 47));      // "v"



// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

console.log(caesarEncrypt('', 3)); // '' 
console.log(caesarEncrypt('123!', 3)); // '123!' 
