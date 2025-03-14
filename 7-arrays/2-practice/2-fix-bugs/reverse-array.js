// #todo

 /**
  * 
  * @param {array} [arr=[]] an array with strings to be reversed
  * @returns a reversed new array
  */
export const reverseArray = (arr = []) => {
  let  backwards = [...arr]
  backwards = backwards.reverse();
  return backwards;
};
