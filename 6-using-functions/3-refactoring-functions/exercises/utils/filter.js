/**
  * Returns a new string after filtering the removeThese characters
 *
 * @param {string} [toFilter = ""] - Some text to remove characters from.
 * @param {string} [removeThese = ""] - The characters to remove.
 * @returns {string} Text with only the given characters still in it.
 */
export const filter = (toFilter= "", removeThese= "") => {
  let newText="";
      for (let char of toFilter) {
        removeThese.toLowerCase().includes(char.toLowerCase()) ? newText : newText += char; 
      }
      return newText; 
};
