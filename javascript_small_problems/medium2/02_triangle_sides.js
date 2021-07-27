/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

input: three numbers representing the lengths of sides of a triangle
output: string categorizing the triangle as isoc, equil, scalene, or impossible

equilateral: all sides equal and greater than 0
isoceles: two sides equal, all greater than 0
scalene: two shortest sides combined are greater than remaining side, all greater than zero

sides are going to be in an array
sort array of sides (shortest sides are always at index 0, 1)
if any sides are zero or negative OR if number of sides not 3
(see if first side <= 0) OR (sides.length === 3)
  return invalid
if all sides equal
(store first side in var)
(use array.every to check all are first side)
  return equaliteral
if two longest sides equal
(if either side1 === side2, or side2 === 3)
  return isoceles
if short1 + short2 > remaining side
(side0 + side1 > side 3)
  return scalene
else
  return invalid

*/
function triangle(...sides) {
  sides = sides.sort();  
  
  if (sides[0] <= 0 ||
      sides.length !== 3 ||
      sides[0] + sides[1] <= sides[2]) return 'invalid';
  
  if (sides.every(side => sides[0] === side)) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isoceles'; 
  } else {
    return 'scalene'; 
  }
  
  return sides;
}

console.log(triangle(1,2)); // invalid
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(3, 1, 1));        // "invalid"
