/**
 * 
 * @param {array} [arr=[]] the array to be confirmed by the user
 * @returns confirmed array
 */

export const confirmItem = (arr=[]) => {
    const newArr = []; 
    for (const item of arr) {
      const confirmedItem = confirm(`do you want to keep "${item}"`); 
         if (confirmedItem) {
            newArr.push(item); 
         }  
    } 
    return newArr; 
}
