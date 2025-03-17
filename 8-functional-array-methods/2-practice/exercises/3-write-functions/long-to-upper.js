// #todo

/**
 *
 */
export const longToUpper = (arr = [], len = 0) => {
  if (!len) {
    len = 0;
  }

  return arr.map((str) => (str.length >= len ? str.toUpperCase() : str));
};
