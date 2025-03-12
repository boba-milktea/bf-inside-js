import { readNumber, display } from '../../../lib/dom-io.js';

 import { multiplication } from './utils/multiplication.js';

document.getElementById("do-math").addEventListener('click', () => {
  // debugger;
  const leftNum = readNumber("left");
  const rightNum = readNumber("right");

  const result = multiplication(leftNum, rightNum) 

  display("product", result); 
});
