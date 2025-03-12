/**
 * 
 * @param {string} [text = ""] - the input phrase
 * @returns {string} - the text string with all space and non letters removed
 */


export const remove = (text = '') => {
  let newText=""; 
  return newText = text.replace(/[^A-Za-z]/g, ""); 
}
