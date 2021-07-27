let rlSync = require('readline-sync');


let limit = rlSync.question('Please enter an integer greater than 0: ');
limit = Number(limit);

let mode;
do {
  let input = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  input = input[0].toLowerCase();

  if (input === 's') {
    mode = 'sum';
  } else if (input === 'p') {
    mode = 'product';
  }

} while (!mode);


let result;
if (mode === 'sum') {
  result = 0;
  for (let number = 1; number <= limit; number += 1) {
    result += number;
  }

} else {
  result = 1; 
  for (let number = 1; number <= limit; number += 1) {
    result *= number;
  }
}

console.log(`The ${mode} of the integers between 1 and ${limit} is ${result}.`);

