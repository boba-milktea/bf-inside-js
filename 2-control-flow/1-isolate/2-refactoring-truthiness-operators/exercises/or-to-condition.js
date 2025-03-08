'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'Dilan';
const lastName = 'Raison';
console.log(firstName, lastName);

const hasAnAName = false;

if (firstName[0] === 'A' || lastName[0] === 'A') {
  hasAnAName = true;
}

// const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';
console.log(hasAnAName);

console.log('-- end --');
