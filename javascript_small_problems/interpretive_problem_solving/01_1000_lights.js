/*
input: total number of switches (definite integer > 0)
output: array of lights that are on (array of integers, with the integer representing the order of the light, 1 for 1st light etc

rules: 
-there are a number of lights from 1 to n
-each light is off at the beginning
-there will be a number of switching operations equal to the number of lights n.
-on the first iterations, every light is toggled (so all lights would be on)
-on the second iteration, every 2nd light is toggled
-on the third iteration, every 3rd light is toggled
-etc.

data structure should be array
-has indices to be used for labeling lights
-each element can have a value indicating on/off
-return result must be an array

create an array to represent lights
  should have number of elements equal to input integer
  all elements should be initialized to off (let's go with true/false for lit/not lit)
iterate through array n times, keeping track of iteration number(for loop?)
if lightPosition (index + 1) % iterationNumber === 0 (every nth number)
  toggle value of element (elem = !elem)
after all iterations, map array so that any lit elements become their position number
then filter mapped array so only elements which are numbers are retained
return filtered array

*/

function lightsOn(switches) {
  let switchBank = [];
  for (let iteration = 1; iteration <= switches; iteration += 1) {
    for (let index = 0; index < switches; index += 1) {
      if ((index + 1) % iteration === 0) {
        switchBank[index] = !switchBank[index];
      }
    }
  }
  
  return switchBank
    .map((elem, index) => {
    if (elem) return index + 1;
    })
    .filter(elem => elem);
}

console.log(lightsOn(1)); // [1]
console.log(lightsOn(2)); // [1]
console.log(lightsOn(3)); // [1]
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
console.log(lightsOn(6)); // [1, 4]
/*
1-[t t t t t t]
2-[t f t f t f]
3-[t f f f t t]
4-[t f f t t t]
5-[t f f t f t]
6-[t f f t f f]

*/

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
