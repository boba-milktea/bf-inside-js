import { removeDuplicates } from './utils/remove-duplicates.js';

/* remove duplicates from the text

remove the dublicate characters from the text. 

*/

/* ============ main program (use functions) ========== */

let original = null;

while (original === null) {
  original = prompt(
    'enter something with repeated letters, they will be removed',
  );
}

let removed = '';

// use set
removed = removeDuplicates(original);

alert(`before: ${original} 
  after: ${removed}`);
