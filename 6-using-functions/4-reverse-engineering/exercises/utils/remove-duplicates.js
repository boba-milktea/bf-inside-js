
/**
 * 
 * @param {string} [text = ""] - text to remove the duplicates
 * @returns {string} - text removed the duplicates
 */


// using Set Object 

export const removeDuplicates = (text="") => {
  let newText = ""; 
  
  const setNewText = new Set(text);
  newText = [...setNewText].join("");
  
  return newText; 
}


// useing filter 

// const removeDuplicates = (text="") => {
//   return text.split('').filter((item, index) => {
//     return text.indexOf(item) === index;
//       }).join('');
// }
