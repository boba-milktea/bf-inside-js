// #todo

/**
 *
 */
export const keepType = (things = [], type = '') => {
  return things.filter((thing) => typeof thing === type);
};
