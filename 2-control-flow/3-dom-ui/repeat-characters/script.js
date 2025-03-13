import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  // debugger;

  // read user values
  const input = readString("user-text"); 
  const times = readNumber("number-of-times"); 

  // repeat the characters in the text
  let result = ""
  for (let i = 0; i < input.length; i++) {
    for (let i = 0; i < times; i++) {
      result += input[i]; 
    }
  }

  // display the text with repeated characters
  display("secret-solution", result); 
});
