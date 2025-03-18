export const skip = (text, num) => {
  let skipped = '';
  for (let i = 0; i < text.length; i++) {
    if (i % num === 0) {
      skipped += text[i];
    }
  }
  return skipped;
};
