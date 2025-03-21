// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const addNums = (x=0, y=0) => {
  return x + y
};

describe('adding two nums', () => {
  describe('two nums are 0', () => {
    it('returns 0', () => {
      const expected = 0;
      const actual = addNums(0, 0);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('returns 5', () => {
    it('add two nums', () => {
      const expected = 5;
      const actual = addNums(2,3);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  // ...
});
