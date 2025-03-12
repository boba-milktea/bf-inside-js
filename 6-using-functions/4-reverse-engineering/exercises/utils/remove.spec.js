import { remove } from './remove.js';

describe('remove space: remove space from the phrase', () => {
  describe('what it means to remove space from the phrase', () => {
    it('remove nothing when it is an empty string', () => {
      const actual = remove('');
      expect(actual).toEqual('');
    });
    it('remove the space from the string', () => {
      const actual = remove('asdf ');
      expect(actual).toEqual('asdf');
    });
    it('remove non-text and empty space from the string', () => {
      const actual = remove('  123');
      expect(actual).toEqual('');
    });
    it('remove the empty space from the phrase', () => {
      const actual = remove('I was a singer');
      expect(actual).toEqual('Iwasasinger');
    });
    it('remove the non-text from the phrase', () => {
      const actual = remove('I was a singer *** ♪ ***');
      expect(actual).toEqual('Iwasasinger');
    });
  });
  describe('default parameters', () => {
    it('the second parameter defaults to "', () => {
      const actual = remove('');
      expect(actual).toEqual('');
    });
  });
});
