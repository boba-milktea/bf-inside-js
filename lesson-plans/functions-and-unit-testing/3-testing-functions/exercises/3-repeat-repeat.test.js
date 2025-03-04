'use strict';

/**
 * Repeats a string with each character repeated.
 *
 * @param {string} text - The string that will be repeat-repeated.
 * @param {number} repeats - How many times to repeat the characters and string.
 * @returns {string} The string with repeated characters, repeated.
 */
// const repeatRepeat = (text, repeats) => {
//   let result = "";

    // first way, using for and for of loop
    // for (let i = 0; i < repeats; i++) {
    //   for (let char of text) {
    //     for (let i = 0; i < repeats; i++) {
    //       result += char; 
    //     }
    //   }
    // }

// second way, using for of loop and the repeat method
//     for (let char of text) {
//       result += char.repeat(repeats)
//     }
//     return result+= result.repeat(repeats)
// };


//third way, using repeat, map, and join method 

const repeatRepeat = (text, repeats) => {
 
  const repeatedChar = text.split("").map(char => char.repeat(repeats)).join(""); 

  return repeatedChar.repeat(repeats); 
}


describe('repeatRepeat: repeats each character and the whole string', () => {
  it('repeat-repeats 0 times', () => {
    const returned = repeatRepeat('hoy!', 0);
    expect(returned).toEqual('');
  });
  it('repeat-repeats 1 time', () => {
    const returned = repeatRepeat('aaaa', 1);
    expect(returned).toEqual('aaaa');
  });
  it('repeat-repeats 2 times', () => {
    const returned = repeatRepeat('Hi', 2);
    expect(returned).toEqual('HHiiHHii');
  });
  it('repeat-repeats 3 times', () => {
    const returned = repeatRepeat('abc', 3);
    expect(returned).toEqual('aaabbbcccaaabbbcccaaabbbccc');
  });
  it('repeat-repeats an empty string 12 times', () => {
    const returned = repeatRepeat('', 12);
    expect(returned).toEqual('');
  });
});
