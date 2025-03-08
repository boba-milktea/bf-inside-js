'use strict';

console.log('-- begin --');

// refactor this code to use || instead of a conditional

// try different values and different types
const isAfterFive = true;
const isTheWeekend = 'Saturday';
console.log(isAfterFive, isTheWeekend);

let stopWorking = isAfterFive === true;

stopWorking = Boolean(isTheWeekend || isAfterFive);

// if (!stopWorking) {
//   stopWorking = isTheWeekend === true;
// }
console.log(stopWorking);

console.log('-- end --');
