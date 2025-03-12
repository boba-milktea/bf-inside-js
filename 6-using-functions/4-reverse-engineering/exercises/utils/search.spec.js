import { search } from './search.js';

describe('search: check if a string includes another string', () => {
  describe('case-sensitive searches', () => {
    it('finds a substring in a case-sensitive search', () => {
      const actual = search(true, 'Hello World', 'World');
      const expected = '"Hello World" does include "World"';
      expect(actual).toEqual(expected);
    });

    it('fails to find a substring due to case sensitivity', () => {
      const actual = search(true, 'Hello World', 'world');
      const expected = '"Hello World" does not include "world"';
      expect(actual).toEqual(expected);
    });

    it('finds an exact match', () => {
      const actual = search(true, 'JavaScript', 'JavaScript');
      const expected = '"JavaScript" does include "JavaScript"';
      expect(actual).toEqual(expected);
    });

    it('does not find a non-existent substring', () => {
      const actual = search(true, 'OpenAI', 'Google');
      const expected = '"OpenAI" does not include "Google"';
      expect(actual).toEqual(expected);
    });
  });

  describe('case-insensitive searches', () => {
    it('finds a substring regardless of case', () => {
      const actual = search(false, 'Hello World', 'world');
      const expected = '"Hello World" does include "world"';
      expect(actual).toEqual(expected);
    });

    it('finds an uppercase substring inside a lowercase text', () => {
      const actual = search(false, 'javascript', 'JavaScript');
      const expected = '"javascript" does include "JavaScript"';
      expect(actual).toEqual(expected);
    });

    it('does not find a non-existent substring', () => {
      const actual = search(false, 'Frontend Developer', 'Backend');
      const expected = '"Frontend Developer" does not include "Backend"';
      expect(actual).toEqual(expected);
    });
  });

  describe('default parameters', () => {
     it('has the second parameter that defaults to true', () => {
     const actual = search(true, 'Wonderful', 'Wonderful');
      expect(actual).toEqual('"Wonderful" does include "Wonderful"');
    });
    it('has the second parameter that defaults to ""', () => {
     const actual = search(false, '', 'cook');
      expect(actual).toEqual('"" does not include "cook"');
    });
     it('has the thirs parameter that defaults to ""', () => {
     const actual = search(false, 'wonderful', '');
      expect(actual).toEqual('"wonderful" does include ""');
    });
  });
});
