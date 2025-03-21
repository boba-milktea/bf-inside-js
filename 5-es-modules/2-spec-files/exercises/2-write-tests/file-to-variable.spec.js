import { fileToVariable } from './file-to-variable.js'; 

describe('fileToVariable', () => {
  test('should remove .js extension and convert kebab-case to camelCase', () => {
    expect(fileToVariable('my-file.js')).toBe('myFile');
    expect(fileToVariable('another-test-file.js')).toBe('anotherTestFile');
  });

  test('should return the same string if there is no .js extension', () => {
    expect(fileToVariable('simpleFile')).toBe('simpleFile');
  });

  test('should handle empty string input', () => {
    expect(fileToVariable('')).toBe('');
  });

  test('should handle filenames with multiple periods correctly', () => {
    expect(fileToVariable('some.file-name.js')).toBe('some.fileName');
  });

  test('should handle filenames without hyphens', () => {
    expect(fileToVariable('filename.js')).toBe('filename');
  });
});