import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  // debugger;

  // read user text
  const input = readString('to-pyramid');

  // create the pyramid
  let result = '';
  let index = 0;

  for (let i = input.length; i > 0; i--) {
    let char = '';
    for (let m = index; m < input.length; m++) {
      char += input[m];
    }
    index++;
    result += char + '\n';
  }

  // display the pyramid
  // display("pyramided", result)
});
