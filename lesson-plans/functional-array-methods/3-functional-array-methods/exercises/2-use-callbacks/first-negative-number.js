/**
 * find the first negative number, returns undefined if there is none
 *  does not modify the array
 * @param {any[]} arr - the array of values
 * @returns {(number|undefined)} the first negative number
 */
export const firstNegativeNumber = (any = []) => {
    return any.filter((num) => typeof num === 'number').find((num) => num < 0);
};

