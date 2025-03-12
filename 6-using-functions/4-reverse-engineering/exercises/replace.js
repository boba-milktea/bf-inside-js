import { replace } from "./utils/replace.js"

/**
 * To replace the old string with a new one
 */

alert (`First you will enter some text, then decide what to replace

- enter the old thing to replace
- and the new thing to replace it`)

let original = null; 

while(original === null) {
  original = prompt ("enter the original text to modify"); 
}

let textToBeReplaced = null; 

while(textToBeReplaced === null) {
  textToBeReplaced = prompt("enter the text to replace"); 
}

let replacingText = null;
while(replacingText === null) {
  replacingText = prompt("enter the text to replace"); 
}

// let newText = ""; 

const newText = replace(original, textToBeReplaced, replacingText)


// newText = original.includes(textToBeReplaced) ? original.replace(textToBeReplaced, replacingText) : original; 

alert(`
before: ${original}
after: ${newText}`)




