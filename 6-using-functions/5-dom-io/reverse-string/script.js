import { readString, display } from '../../../lib/dom-io.js';

import {reverse} from './utils/reverse.js';

document.getElementById("reverse-it").addEventListener('click', () => {
  const stringToReverse = readString("user-text"); 
  const result = reverse(stringToReverse); 

  display("reversed-output", result); 

  // debugger;
});
