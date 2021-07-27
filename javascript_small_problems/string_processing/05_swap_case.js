'use strict';

function swapCase(string) {
  let isUpper = function(char) {
    return /[A-Z]/.test(char);
  }

  let isLower = function(char) {
    return /[a-z]/.test(char);
  }

  return string.split('').map(char => {
    if (isUpper(char)) {
      return char.toLowerCase();
    } else if (isLower(char)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
