let integerToString = function (integer) {
  // first get all digits in an array
  // do
  //   integer % 10 gives digit
  //   put digit in array
  //   subtract digit from integer and divie by 10
  // while (integer > 0)

  // create result string
  // go through array
  // get string rep of digit by ASCII lookup plus offset
  // append string digit to result
  // return result
  let digits = [];
  do {
    let digit = integer % 10;
    digits.push(digit);
    integer = (integer - digit) / 10;
  } while (integer > 0);

  const CHAR_CODE_OFFSET = 48;
  let result = '';
  while (digits.length !== 0) {
    result += String.fromCharCode(CHAR_CODE_OFFSET + digits.pop());
  }

  return result;
};

let signedIntegerToString = function (integer) {
  let digits;
  if (integer < 0) {
    digits = '-' + integerToString(Math.abs(integer));
  } else if (integer > 0) {
    digits = '+' + integerToString(integer);
  } else {
    digits = '0';
  }

  return digits;
};

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"