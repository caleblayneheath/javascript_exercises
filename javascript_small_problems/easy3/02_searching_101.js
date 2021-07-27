let numbers = [];

for (let i = 1; i <= 5; i +=1) {
  let suffix;
  switch(i) {
    case 1: 
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }
  numbers.push(prompt(`Enter the ${i + suffix} number: `));
}

let lastNumber = prompt('Enter the last number: ');
let appears = numbers.includes(lastNumber) ? 'appears' : 'does not appear';

console.log(`The number ${lastNumber} ${appears} in [${String(numbers).replace(/[,]/g, ', ')}].`)
