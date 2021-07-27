/*
Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

input: string representing a sentence
output: string with conversins of number words

convert a number word to a digit
zero, one, two, three, etc

store number words in array

split string into words by ' ' or by punctuation marks
map array of words
  iterate through NUMBER WORDS
  if word.downcase.match(NUMBERWORD)
    replace number word with number
    four. -> 4.
join array and return string
*/

function wordToDigit(string) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four',
                        'five', 'six', 'seven', 'eight', 'nine'];
  
  return string.split(' ').map(word => {
    
    NUMBER_WORDS.forEach((numberWord, index) => {
      if (word.toLowerCase().match(numberWord)) {
        let regex = new RegExp('\\b'+ numberWord + '\\b');
        console.log(regex);
        word = word.replace(regex, index);
      }
    });
    
    return word;
  }).join(' ');;
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks for the weight. Loan me a fiver.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
