 /**
  * 
  * @param {array} [arr=[]] array to be rendered
  * @returns string, the rendered string
  */
export const display = (arr=[]) => {
  let result = ""
  for(const item of arr) {
    result += `- "${item}"
` 
}; 
return result; 
}
