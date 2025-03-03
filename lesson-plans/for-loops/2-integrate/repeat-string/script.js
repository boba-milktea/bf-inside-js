import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  // debugger;

  // read user values
  const text = readString('user-text');
  const times = readNumber('number-of-times');
  // repeat the string
  let result = '';

  if (text && times) {
    for (let i = 0; i < times; i++) {
      for (let m = 0; m < text.length; m++) {
        result += text[m];
      }
    }
  }

  // display the repeated string
  display('repeated-output', result);
});
