/**
 * 
 * @param {array} [arr=[]] an array of number to be averaged
 * @returns number, an averaged number 
 */

export const average = (arr=[]) => {
  const sum = arr.reduce((acc, num) => acc + num, 0); 
  return sum/arr.length; 
}
