'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = true;
const secretInformation = 'a cat';
const warningMessage = "not correct";
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay = isLoggedIn ? secretInformation : warningMessage;  

// let toDisplay; 
// if (isLoggedIn) {
//   toDisplay = secretInformation;
// } else {
//   toDisplay = warningMessage;
// }
console.log(toDisplay);

console.log('-- end --');
