/*
input: an odd definite integer, n
output: logs a hollow diamond to the console,
diamond is a four point shape in an n x n grid

rules:
diamond's top and bottom are one star
moving towards the center from the top or bottom, each row has left padding, a star, center padding, and a final star
the diamonds are always centered, which can also mean left padded by a number of spaces


leftSpaces =
centerSpaces =

1
* // ls = 0; cs = 0

3
 *  // 1 ls = 1, cs = 0      
* * // 2 ls = 0, cs = 1      
 *  // 3 ls = 1, cs = 0      
 
5
  *   // 1 ls = 2, cs = 0   
 * *  // 2 ls = 1, cs = 1   
*   * // 3 ls = 0, cs = 3   
 * *  // 4 ls = 1, cs = 1   
  *   // 5 ls = 2, cs = 0

7
   *    // 1 ls = 3, cs = 0   
  * *   // 2 ls = 2, cs = 1   
 *   *  // 3 ls = 1, cs = 3   
*     * // 4 ls = 0, cs = 5
 *   *  // 5 ls = 1, cs = 3   
  * *   // 6 ls = 2, cs = 1
   *    // 7 ls = 3, cs = 0


let leftSpaces = (n - 1) / 2
let centerSpaces = 1
perform a number of iterations 1 to n, and keep track of iteration number (for loop)
  if (iteration === 1 || iteration n)
    log leftSpaces + '*'
  else
    log leftSpaces + '*' + centerSpaces + '*'
    iteration < n / 2 ? centerSpaces += 2 : centerSpaces -= 2
  
  iteration < n / 2 ? leftSpaces -= 1 : leftSpaces += 1;


*/

function diamond(n) {
  let leftSpaces = (n - 1) / 2;
  let centerSpaces = 1;
  
  for (let iteration = 1; iteration <= n; iteration += 1) {
    let row = '';
    
    if (iteration === 1 || iteration === n) {
      row = ' '.repeat(leftSpaces) + '*';
    } else {
      row = ' '.repeat(leftSpaces) + '*' + ' '.repeat(centerSpaces) + '*';
      iteration < (n / 2) ? centerSpaces += 2 : centerSpaces -= 2;
    }
    
    iteration < (n / 2) ? leftSpaces -= 1: leftSpaces += 1;
    console.log(row);
  }
}

diamond(1);
diamond(3);
diamond(5);
diamond(9);
