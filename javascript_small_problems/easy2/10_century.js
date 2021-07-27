function century(year) {
  let centuryNumber = Math.ceil(year / 100);
  let suffix;

  let suffixNumber = centuryNumber % 100;
  if ((centuryNumber % 100 >= 11) && (centuryNumber % 100 <= 13)) {
    suffix = 'th';
  } else if (centuryNumber % 10 === 1) {
    suffix = 'st';
  } else if (centuryNumber % 10 === 2) {
    suffix = 'nd';
  } else if (centuryNumber % 10 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return centuryNumber + suffix;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
