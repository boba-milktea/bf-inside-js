/**
 * 
 * @param {array} [strings=[]] an array with strings
 * @param {number} [long =0] the string length we want to check
 * @returns boolean, if all the string lengths are more than `long`
 */

export const allLong = (strings = [], long = 0) => {
  let allAre = true;
  for (let i = 0; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      allAre = false;
      break;
    }
  }
  return allAre;
};
