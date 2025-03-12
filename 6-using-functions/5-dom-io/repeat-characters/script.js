import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeat } from './utils/repeat.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  // debugger;
 
  const string = readString("user-text"); 
  const times = readNumber('number-of-times'); 

  const output = repeat(string, times)

  display("repeated-output", output)
});
