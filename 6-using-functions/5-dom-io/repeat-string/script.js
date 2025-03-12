import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatString } from './utils/repeatString.js';

document.getElementById("repeat-it").addEventListener('click', () => {
  // debugger;
  const text = readString("user-text"); 
  const times = readNumber("number-of-times"); 
  const result = repeatString (text, times); 

  display("repeated-output", result); 
});
