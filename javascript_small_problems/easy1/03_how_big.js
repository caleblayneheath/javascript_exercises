const SQMETER_TO_SQFEET = 10.7639;
let rlSync = require('readline-sync');

let primaryUnits;
let secondaryUnits;

do {
  console.log('Enter (f)eet or (m)eters squared:');
  let input = rlSync.prompt();

  input = input[0].toLowerCase();
  if (input === 'f') {
    primaryUnits = 'feet';
    secondaryUnits = 'meters';
  } else if (input === 'm') {
    primaryUnits = 'meters';
    secondaryUnits = 'feet';
  } else {
    continue;
  }

  break;

} while (true); 

console.log(`Enter the length of the room in ${primaryUnits}:`);
let length = rlSync.prompt();

console.log(`Enter the width of the room in ${primaryUnits}:`);
let width = rlSync.prompt();

let areaInMeters;
let areaInFeet;

if (primaryUnits === 'meters') {
  areaInMeters = Number(length) * Number(width);
  areaInFeet = areaInMeters * SQMETER_TO_SQFEET;
} else {
  areaInFeet = Number(length) * Number(width);
  areaInMeters = areaInFeet / SQMETER_TO_SQFEET;
}

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet)`
);
