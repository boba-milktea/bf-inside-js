/**
 * 
 * @param {array} [strings=[]] an array with strings, default an empty array
 * @param {number} [long=5 ] the length we want to compare
 * @returns boolean, if some strings are longer than 5
 */ 

export const someLong = (strings = [], long = 5) => {
  let someAreLong = false;
  for (const string of strings) {
    if (string.length >= long) {
      someAreLong = true;
      break;
    }
  }
  return someAreLong;
};
