import { replace } from './replace.js';

describe('replace: replace the old string with a new string', () => {
  describe('what it means to replace the string', () => {
    it('replace the string', () => {
      const actual = replace('catherine', 'ine', 'ing');
      const expected = 'cathering';
      expect(actual).toEqual(expected);
    });
    it('is case-sensitive', () => {
      const actual = replace('Wonderful', 'Wonder', 'Beauti');
      const expected = 'Beautiful';
      expect(actual).toEqual(expected);
    });
    it('replace string from a phrase', () => {
      const actual = replace('I want to sing', 'sing', 'dance');
      const expected = 'I want to dance';
      expect(actual).toEqual(expected);
    });
    it('replace non characters', () => {
      const actual = replace('I want to ***', '***', '!!!');
      const expected = 'I want to !!!';
      expect(actual).toEqual(expected);
    });
    it('replace empty string', () => {
      const actual = replace('I want to cook', ' cook', 'sleep');
      const expected = 'I want tosleep';
      expect(actual).toEqual(expected);
    });
  });
   describe('default parameters', () => {
      it('the first parameter defaults to ""', () => {
        const actual = replace();
        const expected = '';
        expect(actual).toEqual(expected);
      });
      it('three parameters default to ""', () => {
        const actual = replace();
        const expected = '';
        expect(actual).toEqual(expected);
      });
    });
});
