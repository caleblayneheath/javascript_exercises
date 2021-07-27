/*
input: string
output: object where each key is a word length, and each value is the number of words with that length

string may words with one or more separating spaces
no words in the string should result in an empty object

'Four score and seven.'
[4, 5, 3, 6]

split string into words by spaces
map array of words to word lengths
create empty object for results
iteration through array of lengths
  if results[length]
    ++ results[length]
  else
    results[length] = 1
return results
*/

function wordSizes(string) {
  string = string.replace(/[^a-z ]/gi, '');
  
  if (string === '') return {};
  
  let lengths = string.split(' ').map(word => word.length);
  let result = {};
  lengths.forEach(length => {
    result[length] ? result[length] += 1: result[length] = 1;
  });
  
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
console.log(wordSizes(','));
