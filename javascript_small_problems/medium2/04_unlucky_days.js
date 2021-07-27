/* Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

input: integer representing year greater than 1752
output: integer representing number of Friday the 13ths in that year

let count = 0
for each month in a year
  create a date object corresponding to the 13th
  (new Date(month-13-year))
  if that date is a friday, increment count
  (date.getDay() === 5
return count

*/

function fridayThe13ths(year) {
  let count = 0;
  
  for (let month = 1; month <= 12; month += 1) {
    let date = new Date(year + '-' + month + '-13'); 
    if (date.getDay() === 5) count += 1;
  }
  
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
