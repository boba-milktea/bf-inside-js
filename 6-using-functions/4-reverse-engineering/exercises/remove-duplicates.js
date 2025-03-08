import {removeDuplicates} from './utils/removeDuplicates.js'

/* remove duplicates from the text

remove the dublicate characters from the text. 

*/

/* ============ main program (use functions) ========== */



let original = null; 

while(original === null) {
  original = prompt('enter something with repeated letters, they will be removed'); 
}

let removed = ""; 


// use set 
const splitText = original.split(''); 
const setSplitText = new Set(splitText); 
removed = [...setSplitText]; 


alert (`before: ${original} 
  after: ${removed}`)
