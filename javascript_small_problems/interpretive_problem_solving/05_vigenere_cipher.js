const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  

function caesarShift(char, key) {  
  let position = ALPHABET.indexOf(char.toUpperCase());
  let shiftedChar = ALPHABET[(position + key) % 26];

  if (char === char.toLowerCase()) shiftedChar = shiftedChar.toLowerCase();
  return shiftedChar;
}
  

function vigenereEncrypt(plaintext, keyword) {
  let result = '';
  let keyIndex = 0;
  keyword = keyword.toUpperCase();
  
  plaintext.split('').forEach(char => {
    if (char.match(/[a-z]/i)) {
      let key = ALPHABET.indexOf(keyword[keyIndex]);
      result += caesarShift(char, key);
      keyIndex = (keyIndex + 1) % keyword.length;
    } else {
     result += char; 
    }
    
  });
  
  return result;
}

console.log(vigenereEncrypt('abc', 'a'));
console.log(vigenereEncrypt('aB c!', 'ab'));

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
