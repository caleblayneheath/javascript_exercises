/*
Name Swapping
Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

input: string with first name, a space, and a last name
output: string with last name, a comma, a space, then first name

split string using ' ' into names
  last name = last element in array
  first, middle, etc names = all elements from 1 to second to last
last name = array pop // now array is nothing but first, middle, etc names
  return lastname + ', ' + array.join(' ')
*/

let swapName = name => {
  let allNames = name.split(' ');
  let lastName = allNames.pop();
  return lastName + ', ' + allNames.join(' ');
};

console.log(swapName('Joe Rogan Roberts'));    // "Roberts, Joe Rogan"
