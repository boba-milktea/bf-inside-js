import {average} from './average.js'

describe("average function", () => {
  describe("function behavior", () => {
    it("returns NaN when given an empty array", () => {
      const result = average([]);
      expect(result).toBeNaN();
    });

    it("returns the correct average for a list of positive numbers", () => {
      const result = average([2, 4, 6, 8, 10]);
      expect(result).toBe(6);
    });

    it("returns the correct average for a list of negative numbers", () => {
      const result = average([-2, -4, -6, -8, -10]);
      expect(result).toBe(-6);
    });

    it("returns the correct average for a mix of positive and negative numbers", () => {
      const result = average([-5, 5, -10, 10, 0]);
      expect(result).toBe(0);
    });

    it("returns the correct average when the array contains a single number", () => {
      const result = average([7]);
      expect(result).toBe(7);
    });

    it("returns the correct average when the array contains decimals", () => {
      const result = average([1.5, 2.5, 3.5, 4.5]);
      expect(result).toBe(3);
    });

  });

  describe("default parameters", () => {
    it("defaults to an empty array and returns NaN", () => {
      const result = average();
      expect(result).toBeNaN();
    });
  });
});
