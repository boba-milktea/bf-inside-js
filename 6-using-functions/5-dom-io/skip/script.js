import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { skip } from './utils/skip.js';

document.getElementById("skip-them").addEventListener('click', () => {

  const sizeToSkip = readNumber("skip-size");
  const textToSkip = readString("user-text"); 
  
  console.log(sizeToSkip, textToSkip)
  const result = skip(textToSkip, sizeToSkip); 

  
  display("skipped-output", result)
});
