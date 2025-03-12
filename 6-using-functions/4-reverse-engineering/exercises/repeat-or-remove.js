import {remove} from './utils/remove.js'
import {repeatCharacters} from './utils/repeat-characters.js'


let original = null; 

while (original === null) {
  original = prompt("enter a phrase"); 
}


const removeEmpty = confirm(`
'ok' to remove everything that is not a letter
'cancel' to repeat each character
`)

let newPhrase = ""; 
if (removeEmpty) {
  newPhrase = remove(original);
} else {
  newPhrase = repeatCharacters(original, 2);
}

alert(newPhrase); 