import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  // debugger;

  // read user values
  const text = readString('user-text');

  const num = readNumber('number-of-times');
  // repeat the characters in the text
  let result = '';
  // debugger;

  if (text && num) {
    for (let i = 0; i < text.length; i++) {
      if (num > 0) {
        for (let m = 0; m < num; m++) {
          result += text[i];
        }
      }
    }
  }

  // display the text with repeated characters
  display('repeated-output', result);
});
