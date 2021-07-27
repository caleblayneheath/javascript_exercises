/*
Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

input: three integers greater than 0 representing degrees
output: string classifying triangle by angles


set smallest angle to math.min(angles)
set largest angle to Math.max angles
set middle = sides added - smallest - largest
if (invalidTriangle) 
(must sum to 180, all angles must be > 0)
(small + middle + large === 180, small > 0
  return invalid
if largest hangle is greater than 90
  return obtuse
if largest angle is 90
  return right
if largest angle < 90
  return acute

*/

function triangle(angle1, angle2, angle3) {
  let smallest = Math.min(angle1, angle2, angle3);
  let largest = Math.max(angle1, angle2, angle3);
  let middle = (angle1 + angle2 + angle3) - smallest - largest;
  
  if (smallest + middle + largest !== 180 || smallest <= 0) {
    return 'invalid';
  } else if (largest > 90) {
    return 'obtuse';
  } else if (largest === 90) {
    return 'right';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
