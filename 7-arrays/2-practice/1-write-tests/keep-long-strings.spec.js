 import { keepLongStrings } from './keep-long-strings.js';


'use strict';

// `expect().toEqual()` does a deep comparison
describe("keep the string when it exceeds a certain length", () => {
  describe("the function behavior", () => {
    it("returns an empty array when the input array contains only an empty string", () => {
      const result = keepLongStrings([""], 5);
      expect(result).toEqual([]);
    });

    it("returns an array of strings that exceed the length", () => {
      const result = keepLongStrings(["hello", "world", "hi"], 3);
      expect(result).toEqual(["hello", "world"]);
    });

    it("returns an empty array when no strings exceed the length", () => {
      const result = keepLongStrings(["a", "b"], 6);
      expect(result).toEqual([]);
    });

    it("ignores non-string elements and only checks string lengths", () => {
      const result = keepLongStrings(["a", "longword", 3, { key: "value" }], 2);
      expect(result).toEqual(["longword"]);
    });
  });

  describe("the default parameters", () => {
    it("has an empty array as the default first parameter", () => {
      const returned = keepLongStrings();
      expect(returned).toEqual([]);
    });

    it("has 5 as the default second parameter", () => {
      const returned = keepLongStrings(["short", "thisIsLong"]);
      expect(returned).toEqual(["thisIsLong"]);
    });
  });
});