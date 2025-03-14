/**
 * 
 * @param {array} arr an array of strings
 * @param {string} str the query string to filer 
 * @returns a new array with filtered strings
 */
export  const search = (arr, str) => {
  return arr.filter((arr) => arr.includes(str)); 
}
  