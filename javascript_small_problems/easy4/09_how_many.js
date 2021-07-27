/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

input: array 
output: console output which is element => count of that element

create empty result object
iterate through array
  if result[elem] += 1
  else result[elem] = 1

get object keys
iterate through the keys
log key => value

*/
function countOccurrences(vehicles) {
  let count = {};
  
  vehicles.forEach(elem => {
    count[elem] ? count[elem] += 1 : count[elem] = 1;
  });
  
  Object.keys(count).forEach(key => {
    console.log(key + ' => ' + count[key]);
  });
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
