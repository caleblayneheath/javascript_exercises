/*
prompt for age
prompt for retirement age
get remaining work years by subtracting age from retirement

get year using Date.now, 
add remaining work years
display
*/

let age = prompt('What is your age?');
let retirementAge = prompt('At what age would you like to retire?')
let remainingYears = Number(retirementAge) - Number(age);

let currentYear = (new Date).getFullYear();
let retirementYear = currentYear + remainingYears;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${remainingYears} years of work to go!`);
