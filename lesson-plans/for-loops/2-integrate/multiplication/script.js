import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  // debugger;

  // read user values
  const leftNum = readNumber('left');
  const rightNum = readNumber('right');

  // use a for loop to multiply the two numbers
  let sum = 0;

  if (leftNum && rightNum) {
    for (let i = 0; i < leftNum; i++) {
      sum += rightNum;
    }
  }

  // display the product
  display('product', sum);
});
