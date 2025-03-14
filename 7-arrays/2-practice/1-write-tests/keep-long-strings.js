/**
 * 
 * @param {array} [strings=[]] array with strings
 * @param {number} [long=5]  default number is 5
 * @returns array with strings that more than 5 characters
 */


export const keepLongStrings = (strings = [], long = 5) => {
  const longStrings = [];
  for (const string of strings) {
    if (string.length > long) {
      longStrings.push(string);
    }
  }
  return longStrings;
};
