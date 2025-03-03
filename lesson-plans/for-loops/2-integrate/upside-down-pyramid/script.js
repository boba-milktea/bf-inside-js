import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  // debugger;

  // read user text
  const text = readString('to-pyramid');
  // debugger;

  // create the pyramid
  let result = '';

  // easy way
  //   if (text) {
  //     for (let i= 0; i < text.length; i++) {
  //       result += text.slice(i) +"\n";
  //     }
  // }

  // toublesome way! 😠 happy coding!
  if (text) {
    // debugger;
    for (let i = text.length; i > 0; i--) {
      let char = '';
      for (let m = text.length - i; m < text.length; m++) {
        char += text[m];
      }
      result += char + '\n';
    }
  }

  display('pyramided', result);
});
