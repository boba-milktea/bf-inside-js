import { readString, display } from '../../../lib/dom-io.js';

import { pyramid } from './utils/pyramid.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  // debugger;
  const textToPyramid = readString("to-pyramid"); 
  const result = pyramid(textToPyramid); 

  display("pyramided", result); 
});
