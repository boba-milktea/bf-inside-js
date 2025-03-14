/**
 * Creates a new array containing only strings of the correct length.
 *
 * @param {string[]} [strings=[]] - An array of numbers.
 * @param {number} [goodLength=0] - The length of string to keep.
 * @returns {string[]} A new array with only strings of `goodLength`.
 */
export const filterByLength = (strings, goodLength) => {
    return strings.filter((string) => string.length === goodLength);
}
