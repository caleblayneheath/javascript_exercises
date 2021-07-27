/*

input: an odd integer n >= 7
output: log an 8 pointed star

each star is on an n x n grid
every row except the middle has 3 stars
the middle row always has n stars

left pad starts at 0
left = (n - 3 - middlePad * 2) / 2
increments my 1 until middled then decrements

middle pad starts at (n - 3) / 2
decrements by 1 until middle then increments

n = 7
*  *  * l = 0, m = 2
 * * *  l = 1, m = 1
  ***   l = 2, m = 0
*******
  ***   l = 2, m = 0
 * * *  l = 1, m = 1
*  *  * l = 0, m = 2

n = 9
*   *   * l = 0, m = 3
 *  *  *  l = 1, m = 2
  * * *   l = 2, m = 1
   ***    l = 3, m = 0
*********
   ***
  * * *
 *  *  *
*   *   *

let midPad = (n - 3) / 2;
let leftPad = (n - 3 - (2 * midPad)) / 2;

for each row 1 to n
  if row not the middle
    log leftPad + * + midPad + * +midPad + *
    if row < n/2
      midpad -= 1
    if row > n/2
      midpad += 1
    reset leftPad using formula
  if row is the middle
    log * times n

*/

function eightPointStar(n) {
  let midPad = (n - 3) / 2;
  let leftPad = (n - 3 - (2 * midPad)) / 2;
  
  for (let row = 1; row <= n; row += 1) {
    let string = '';
    
    if (row === Math.ceil(n/2)) {
      string += '*'.repeat(n);
    } else {
      string += ' '.repeat(leftPad) + '*';
      string += ' '.repeat(midPad) + '*';
      string += ' '.repeat(midPad) + '*';          
    }
    
    row < n / 2 ? midPad -= 1: midPad += 1;
    leftPad = (n - 3 - (2 * midPad)) / 2;
    
    console.log(string);
  }
}

eightPointStar(7);

eightPointStar(9);
