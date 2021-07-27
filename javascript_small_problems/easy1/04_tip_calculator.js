let rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));
let tipPercentage = Number(rlSync.question('What is the tip percentage? '));

let tip = (bill * tipPercentage / 100);
console.log(`The tip is $${tip.toFixed(2)}`);

let total = bill + tip;
console.log(`The total is $${total.toFixed(2)}`);
