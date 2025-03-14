
import {confirmItem} from '../utils/confirm.js'
import {display} from '../utils/display.js'

alert(`enter as many inputs as you want. 
  When you're done entering strings press "cancel"`); 

let inputs = []; 

while(true) {
  let input = prompt('enter the next phrase or press"cancel"'); 

  if (input === "") {
    alert("nothing is not allowed"); 
    continue;
  } 

  if (input === null) {
    break; 
  }

  inputs.push(input); 
}

console.log('the inputs' + inputs)

const confirmedInputs = confirmItem(inputs);

console.log(confirmedInputs); 

 const result = display(confirmedInputs); 


alert(result);
