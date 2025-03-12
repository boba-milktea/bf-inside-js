import {removeDuplicates} from './remove-duplicates'

describe('remove duplicated characters', () => {
  describe('how it should function', () => {
    test('return empty string', () => {
      const result = removeDuplicates(''); 
      expect(result).toEqual(""); 
    }); 
    test('remove duplicated strings', () => {
      const result = removeDuplicates("coooookies"); 
      expect (result).toEqual("cokies"); 
    }); 
    test('remove duplicated string of numbers', () => {
      const result = removeDuplicates('1112300'); 
      expect (result).toEqual("1230"); 
    });
    test('remove duplicated string of space', () => {
      const result = removeDuplicates('1  23cook');
      expect (result).toEqual('1 23cok');
    }); 
  }); 
  describe('default parameters', () => {
    test('has one parameter that defaults to ""', () => {
      const result = removeDuplicates(); 
      expect(result).toEqual(""); 
    });
  });
});
