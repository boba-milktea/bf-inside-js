// #todo

import { someLong } from './some-long.js';

describe("someLong function", () => {
  describe("function behavior", () => {
    it("returns false when given an empty array", () => {
      const result = someLong([]);
      expect(result).toBe(false);
    });

    it("returns true when at least one string is longer than or equal to the given length", () => {
      const result = someLong(["hi", "hello", "world"], 5);
      expect(result).toBe(true);
    });

    it("returns false when no strings meet the length requirement", () => {
      const result = someLong(["a", "bb", "ccc"], 4);
      expect(result).toBe(false);
    });

    it("returns true even if only one string meets the requirement", () => {
      const result = someLong(["a", "bb", "cccc", "d"], 4);
      expect(result).toBe(true);
    });

    it("ignores non-string elements and only checks string lengths", () => {
      const result = someLong(["hi", 12345, { key: "value" }, "hello"], 5);
      expect(result).toBe(true);
    });

    it("returns false if all elements are non-strings", () => {
      const result = someLong([1, 2, 3, { key: "value" }], 2);
      expect(result).toBe(false);
    });
  });

  describe("default parameters", () => {
    it("uses 5 as the default length parameter", () => {
      const result = someLong(["hi", "world", "testing"]);
      expect(result).toBe(true);
    });

    it("defaults to an empty array when no arguments are provided", () => {
      const result = someLong();
      expect(result).toBe(false);
    });
  });
});
