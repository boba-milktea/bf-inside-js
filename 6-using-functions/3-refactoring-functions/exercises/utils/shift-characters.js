/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {string} [text = ""] - Some text to remove characters from.
 * @param {string} [toKeep = ""] - The characters to keep.
 * @returns {string} Text with only the given characters still in it.
 */
export const shiftCharacters = (text = "", shift = 0) => {
  let newText = ""; 
  if (typeof shift === "number") {
    for (let char of text) {
      newText += String.fromCharCode(char.charCodeAt() + shift); 
    }
  }
  return newText; 
};
