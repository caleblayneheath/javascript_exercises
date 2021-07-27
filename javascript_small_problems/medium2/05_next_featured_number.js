/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

input: positive integer greater than 0
output: next featured number larger than the input, or error message if no featured number

featured number:
- is odd (mod 2 === 1)
- is a multiple of seven (mod 7 === 0)
- no digit occurs more than once
- no featured number can be larger than 9876543201

let candidate = input
while candidate is not odd and not a multiple of seven
  candidate += 1
at this point our candidate is odd and a multiple of 7
do
  if candiate >= LARGEST_FEATURED_NUMBER, return ERROR
  if number has any repeating digits
  (
    turn number into string
    for each char in the string
      for each possible digit 0 -9
      return false if char.indexOf(digit) !== char.lastIndexOf(digit)
  
  )
    candidate += 14
    continue
  else
    return candidate
    
while
*/

function featured(n) {
  function isOdd(num) {
    return num % 2 === 1; 
  }
  
  function isMultipleOfSeven(num) {
    return num % 7 === 0;
  }
  
  function getInitialCandidate(num) {
    do {
      num += 1;
    } while (!(isOdd(num) && isMultipleOfSeven(num)));
    
    return num;
  }
  
  function hasRepeatingDigits(num) {
    let string = String(num);
    for (let digit = 0; digit <= 9; digit += 1) {
      if (string.indexOf(digit) !== string.lastIndexOf(digit)) {
        return true;
      }
    }
    
    return false;
  }
  
  const LARGEST_FEATURED_NUMBER = 9876543201;
  
  let candidate = getInitialCandidate(n);

  do {
    if (hasRepeatingDigits(candidate)) {
      candidate += 14; 
    } else {
      return candidate; 
    }
  } while (candidate <= LARGEST_FEATURED_NUMBER);
  
  return 'ERROR';
}

console.log(featured(3)); // 7
console.log(featured(7)); // 21
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // error
console.log(featured(99999999999)); //errror
