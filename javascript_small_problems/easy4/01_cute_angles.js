/*
input: number representing an angle between 0 and 360 degrees
output: string respresenting angle in degrees, minutes, and seconds

RULES:
' for minutes
" for seconds
60 minutes in a degree
60 seconds in a minute

degree and second output should be represented with 2 sig figs, padded with zeros if needed

get degree by flooring angle
subtract degree from angle to get remainder
get total number of seconds by multiplying remainder times 3600
get seconds by doing remainder % 60
get minutes by first subtracting seconds, then dividing by 60

convert degrees, minutes, seconds to strings
for minutes and seconds, if string length === 1, prepend with a zero
then concatenate with appropriate symbols

.73 into 43'48"
.73 * 3600 = 2628 seconds
2628 seconds / 60 = 43.8 seconds
2628 seconds % 60 = 48 seconds
*/

function dms(angle) {
  function padNumber(number) {
    if (number >= 10) {
      return String(number);
    } else {
      return '0' + String(number);
    }
  }
  
  const DEGREE_SYMBOL = '˚';
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;
  
  angle = angle % 360;
  if (angle < 0) angle = 360 + angle;
  
  
  let degree = Math.floor(angle);
    
  let totalSeconds = (angle - degree) * MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;
  
  let minute = Math.floor(totalSeconds / 60);
  let second = Math.floor(totalSeconds % 60);
  
  degree = String(degree) + DEGREE_SYMBOL;
  minute = padNumber(minute) + "'";
  second = padNumber(second) + '"';
  
  return degree + minute + second;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // -1°00'00"
console.log(dms(400));  // 400°00'00"
console.log(dms(-40));  // -40°00'00"
console.log(dms(-420)); // 420°00'00"
