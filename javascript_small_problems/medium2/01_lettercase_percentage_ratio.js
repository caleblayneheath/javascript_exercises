/*
Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither (does include spaces)
You may assume that the string will always contain at least one character.

input: string with length of at least 1
output: return an object with the keys lowercase, uppercase, neither
  the value for each key is string representation of a percentage to two decimal places precision
  
  create object where keys are (uppercase, lowercase, neither) and values are a regexes to match the category
  create empty result object
  for each char category (lower, upper, neither)
    determine count of letters in that category
      replace all chars that aren't in category
      count is length of replaced string
    divide count by string length to get percentage
    format percentage as two decimal precision
    add key and value to results object
  
  return result object
*/

function letterPercentages(string) {
  const CATEGORIES = {'lowercase': /[a-z]/g,
                      'uppercase': /[A-Z]/g,
                      'neither': /[^a-z]/gi,};
  let totalCount = string.length;
  let result = {};
  
  for (let category in CATEGORIES) {
    let count = totalCount - string.replace(CATEGORIES[category], '').length;
    let percentage = (count / totalCount * 100).toFixed(2);
    result[category] = percentage;
  }
  
  return result;
}

console.log(letterPercentages('abCdef 123')); // lc 5 up 1 misc 4
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
