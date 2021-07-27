let stringToInteger = function(numberString) {
  // traverse number string backwards
  // for each char digit
  // get char code and subtract 48
  // multiply digit by 10 ** (str.length - 1 - index)
  // add to accum
  // return accum
  const CHAR_CODE_OFFSET = 48;
  let accumulator = 0;
  for (let index = numberString.length - 1; index >= 0; index -= 1) {
    let digit = numberString.charCodeAt(index) - CHAR_CODE_OFFSET;
    accumulator += (digit * (10 ** (numberString.length - 1 - index)));
  }

  return accumulator;
};

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570