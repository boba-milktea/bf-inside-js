/**
 * 
 * @param {array} [arr=[]] an array with strings 
 * @param {number} [long=0] string long // default value 0
 * @returns array, a new array with uppercase strings if the string is longer than `long`
 */


export const longToUpper = (arr=[], long=0) => {
  long = long < 0 ? 0 : long; 
  return arr.map((string) => string.length >= long ? string.toUpperCase() : string);
};
