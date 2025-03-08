/**
 * Returns a new string with reversed string.
 *
 * @param {string} [text = ""] - text to be reversed
 * @returns {string} reversed new text.
 */
export const reverse = (text="") => {
  let newText = ""; 
  for (let i = text.length; i > 0; i--) {
    newText += text[i-1]; 
  }
  return newText; 
};
