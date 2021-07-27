/*
input: an odd definite integer, n
output: logs a diamond to the console,
diamond is a four point shape in an n x n grid

rules:
diamond's top and bottom are one star
moving towards the center from the top or bottom, each row has two stars mroe than the previous row
the centermost row has n stars

each row has an odd number of stars
the diamonds are always centered, which can also mean left padded by a number of spaces
leftSpaces = (n - starsInRow) / 2

1
*

3
 *  // 1       3 - 2 = 1
*** // 2       3 - 0 = 3
 *  // 3       3 - 2 = 1
 
5
  *   // 1    5 - 4 = 1
 ***  // 2    5 - 2 = 3
***** // 3    5 - 0 = 5
 ***  // 4    5 - 2 = 3
  *   // 5    5 - 4 = 1


let starsInRow = 1
for a number of iterations equal to n, starting with 1
  let leftSpaces = (n - starsInRow) / 2
  log ' '.repeat(leftSpaces) + '*'.repeat(starsInRow)
  
  if iterationNumber < n/2
    starsInRow += 2
  else starsInRow -= 2

*/

function diamond(n) {
  let starsInRow = 1;
  for (let iteration = 1; iteration <= n; iteration += 1) {
    let leftPadding = (n - starsInRow) / 2;
    console.log(' '.repeat(leftPadding) + '*'.repeat(starsInRow));
    iteration < n / 2 ? starsInRow += 2 : starsInRow -= 2;
  }
}

diamond(1);
diamond(3);
diamond(5);
diamond(9);
