import { reverseAString } from './reverse-a-string.js';

describe('it should reverseAString strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverseAString()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverseAString('')).toEqual('');
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverseAString("toads")).toEqual('sdaot');
    });
    it('"hello" should return "olleh"', () => {
      expect(reverseAString("hello")).toEqual('olleh');
    });
    it('"world" should return "dlrow"', () => {
      expect(reverseAString("world")).toEqual('dlrow');
    });
    it('"JavaScript" should return "tpircSavaJ"', () => {
      expect(reverseAString("JavaScript")).toEqual('tpircSavaJ');
    });
    it('"racecar" should return "racecar"', () => {
      expect(reverseAString("racecar")).toEqual('racecar');
    });
  });
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverseAString(true)).toEqual('text is not a string');
    });
    it('42 should return "text is not a string"', () => {
      expect(reverseAString(42)).toEqual('text is not a string');
    });
    it('null should return "text is not a string"', () => {
      expect(reverseAString(null)).toEqual('text is not a string');
    });
    it('an object should return "text is not a string"', () => {
      expect(reverseAString({ key: "value" })).toEqual('text is not a string');
    });
  });
});
