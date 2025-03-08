/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [text=""] - A string to repeat each character.
 * @param {number} [repeat=0] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (text = '', repeat = 1) => {
  let newText = '';

  for (let char of text) {
    for (let i = 0; i < repeat; i++) {
      newText += char;
      console.log(newText);
    }
  }

  return newText;
};
