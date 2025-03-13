import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById("skip-them").addEventListener('click', () => {
  // debugger;

  // read user values
  const index = readNumber("skip-size"); 
  const input = readString("user-text"); 

  // create a new string with skipped characters
  let result = ""; 

    for (let i = 0; i < input.length; i += index) {
      result += input[i]
    }
 

  // display the skipped string
  display ('skipped-output', result); 
});
