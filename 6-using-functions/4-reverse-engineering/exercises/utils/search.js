/**
 * 
 * @param {boolean} [caseSensitive = 'true'] - to check if it's case sensitive 
 * @param {string} [toBeSearched = ""] - the phrase or text to be searched
 * @param {string} [toSearch = ""] - the text query to search 
 * @returns {string} - if toBeSearched contains toSearch
 */

export const search  = (caseSensitive = "true", toBeSearched = "" , toSearch ="") => {
  let result = ''; 
  result = !caseSensitive ? 
  toBeSearched.toLowerCase().includes(toSearch.toLowerCase()) ? 
  `"${toBeSearched}" does include "${toSearch}"` :
  `"${toBeSearched}" does not include "${toSearch}"`: 
  toBeSearched.includes(toSearch) ? 
  `"${toBeSearched}" does include "${toSearch}"` :
  `"${toBeSearched}" does not include "${toSearch}"`
  return result; 
}
