/* ===== import functions ===== */

import { average } from '../utils/average.js';

/* ===== main program (use functions) ===== */

alert(
  `enter as many numbers as you want.

When you're done entering numbers press cancel
-> your numbers will be averaged`,
);

// -- gather user input --
const numbers = [];
while (true) {
  const input = prompt('enter the next number or cancel to finish');

  if (input === null) {
    break;
  }

  if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  const nextNumber = Number(input);
  if (Number.isNaN(nextNumber)) {
    alert(`"${input}" is not a number`);
  } else {
    numbers.push(nextNumber);
  }
}
console.log(numbers);

// -- calculate the average --
/* == BEGIN: refactor the averaging logic == */
const theAverage  = average(numbers); 
/* == END: refactoring == */
console.log(theAverage);

// -- build the final message --
const message = `numbers:
- ${numbers.join('\n- ')}

average: ${theAverage}`;

// -- alert the final message --
alert(message);
