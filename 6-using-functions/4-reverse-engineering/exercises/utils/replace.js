/**
 * 
 * @param {string} [text = ""] - the input phrase or text
 * @param {string} [beReplaced = ""] - old text to be replaced
 * @param {string} [toReplace = ""] - new text to replace the old text
 * @returns {string} - the text string with the replaced text
 */


export const replace = (text = "", beReplaced = "", toReplace = "") => {
  let newText = ""
  newText = text.includes(beReplaced) ? text.replace(beReplaced, toReplace) : text; 
  return newText; 
}
