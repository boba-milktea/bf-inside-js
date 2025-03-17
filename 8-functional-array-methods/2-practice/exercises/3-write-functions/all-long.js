/**
 *
 */
export const allLong = (strings = [], long = 0) => {
  return strings.every(str => str.length >= long) 
};
