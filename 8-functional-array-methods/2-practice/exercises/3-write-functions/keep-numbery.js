// #todo

/**
 * casts all array items to Number and removes NaN
 * @param {Array} arr - the array of items to coerce
 * @returns {Array} - a new array of number values
 */
export const keepNumbery = (arr = []) => {
  const newArr = [...arr];
  return newArr.map((num) => Number(num)).filter((num) => !Number.isNaN(num)); 
};
